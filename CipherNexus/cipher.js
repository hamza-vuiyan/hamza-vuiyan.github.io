/* ================================================================
   CIPHER NEXUS — Classical Cryptography Learning Lab
   ================================================================ */

/* ===== UTILITY FUNCTIONS ===== */
function sanitize(text) {
  return text.toUpperCase().replace(/[^A-Z]/g, '');
}
function mod(n, m) {
  return ((n % m) + m) % m;
}
function charToNum(c) { return c.charCodeAt(0) - 65; }
function numToChar(n) { return String.fromCharCode(mod(n, 26) + 65); }
function charsOnly(text) {
  return text.toUpperCase().replace(/[^A-Z]/g, '');
}

/* ===== TOAST SYSTEM ===== */
function showToast(msg, type) {
  const container = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = 'toast toast-' + type;
  t.textContent = '> ' + msg;
  container.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.4s'; setTimeout(() => t.remove(), 400); }, 3000);
}

/* ===== COPY & CLEAR ===== */
function copyResult(elemId) {
  const el = document.getElementById(elemId);
  if (!el || !el.textContent) { showToast('Nothing to copy', 'error'); return; }
  const text = el.textContent;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard', 'success')).catch(() => fallbackCopy(text));
  } else { fallbackCopy(text); }
}
function fallbackCopy(text) {
  const ta = document.createElement('textarea'); ta.value = text;
  document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
  showToast('Copied to clipboard', 'success');
}
function clearPanel(ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === 'DIV') el.textContent = '';
      else el.value = '';
    }
  });
  showToast('Cleared', 'success');
}

/* ================================================================
   CAESAR CIPHER
   ================================================================ */
function caesarShift(text, shift, mode) {
  const s = shift % 26;
  return charsOnly(text).split('').map(c => {
    const n = charToNum(c);
    return numToChar(mode === 'enc' ? n + s : n - s);
  }).join('');
}

function caesarEncrypt() {
  const pt = document.getElementById('caesar-pt').value;
  const shift = parseInt(document.getElementById('caesar-shift-e').value) || 0;
  if (!pt) { showToast('Please enter plaintext', 'error'); return; }
  document.getElementById('caesar-enc-out').textContent = caesarShift(pt, shift, 'enc');
  showToast('Encryption complete', 'success');
}

function caesarDecrypt() {
  const ct = document.getElementById('caesar-ct').value;
  const shift = parseInt(document.getElementById('caesar-shift-d').value) || 0;
  if (!ct) { showToast('Please enter ciphertext', 'error'); return; }
  document.getElementById('caesar-dec-out').textContent = caesarShift(ct, shift, 'dec');
  showToast('Decryption complete', 'success');
}

/* ================================================================
   PLAYFAIR CIPHER
   ================================================================ */
function buildPlayfairMatrix(key) {
  const cleaned = key.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I');
  const seen = new Set();
  const matrix = [];
  for (const ch of (cleaned + 'ABCDEFGHIKLMNOPQRSTUVWXYZ')) {
    if (!seen.has(ch)) { seen.add(ch); matrix.push(ch); }
  }
  const grid = [];
  for (let i = 0; i < 5; i++) grid.push(matrix.slice(i * 5, i * 5 + 5));
  return grid;
}

function playfairDigraphs(text) {
  let s = text.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I');
  const res = [];
  for (let i = 0; i < s.length; i += 2) {
    let a = s[i], b = s[i + 1];
    if (!b) { res.push(a + 'X'); break; }
    if (a === b) { res.push(a + 'X'); i--; }
    else res.push(a + b);
  }
  return res;
}

function playfairProcess(text, key, mode) {
  const grid = buildPlayfairMatrix(key);
  const digs = playfairDigraphs(text);
  const pos = {};
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) pos[grid[r][c]] = [r, c];

  const result = digs.map(pair => {
    const [r1, c1] = pos[pair[0]];
    const [r2, c2] = pos[pair[1]];
    if (r1 === r2) {
      const nc1 = mod(mode === 'enc' ? c1 + 1 : c1 - 1, 5);
      const nc2 = mod(mode === 'enc' ? c2 + 1 : c2 - 1, 5);
      return grid[r1][nc1] + grid[r2][nc2];
    } else if (c1 === c2) {
      const nr1 = mod(mode === 'enc' ? r1 + 1 : r1 - 1, 5);
      const nr2 = mod(mode === 'enc' ? r2 + 1 : r2 - 1, 5);
      return grid[nr1][c1] + grid[nr2][c2];
    } else {
      return grid[r1][c2] + grid[r2][c1];
    }
  }).join('');

  return result;
}

function renderMatrix(id, key) {
  const grid = buildPlayfairMatrix(key);
  let html = '';
  for (let r = 0; r < 5; r++) html += grid[r].join(' ') + '\n';
  document.getElementById(id).textContent = html;
}

function playfairEncrypt() {
  const pt = document.getElementById('play-pt').value;
  const key = document.getElementById('play-key-e').value;
  if (!pt) { showToast('Please enter plaintext', 'error'); return; }
  if (!key) { showToast('Please enter a key', 'error'); return; }
  const result = playfairProcess(pt, key, 'enc');
  document.getElementById('play-enc-out').textContent = result;
  renderMatrix('play-matrix-e', key);
  showToast('Encryption complete', 'success');
}

function playfairDecrypt() {
  const ct = document.getElementById('play-ct').value;
  const key = document.getElementById('play-key-d').value;
  if (!ct) { showToast('Please enter ciphertext', 'error'); return; }
  if (!key) { showToast('Please enter a key', 'error'); return; }
  const result = playfairProcess(ct, key, 'dec');
  document.getElementById('play-dec-out').textContent = result;
  renderMatrix('play-matrix-d', key);
  showToast('Decryption complete', 'success');
}

/* ================================================================
   HILL CIPHER (2×2)
   ================================================================ */
function modInverse(a, m) {
  a = mod(a, m);
  for (let x = 1; x < m; x++) { if ((a * x) % m === 1) return x; }
  return null;
}

function hillProcess(text, a, b, c, d, mode) {
  let clean = charsOnly(text);
  if (clean.length % 2 !== 0) clean += 'X';
  let result = '';
  const det = mod(a * d - b * c, 26);
  let invDet;
  if (mode === 'dec') {
    invDet = modInverse(det, 26);
    if (invDet === null) { showToast('Matrix is not invertible mod 26 (det shares factor with 26)', 'error'); return null; }
  }
  for (let i = 0; i < clean.length; i += 2) {
    const p1 = charToNum(clean[i]), p2 = charToNum(clean[i + 1]);
    let c1, c2;
    if (mode === 'enc') {
      c1 = mod(a * p1 + b * p2, 26);
      c2 = mod(c * p1 + d * p2, 26);
    } else {
      const adjA = d, adjB = -b, adjC = -c, adjD = a;
      c1 = mod(invDet * (adjA * p1 + adjB * p2), 26);
      c2 = mod(invDet * (adjC * p1 + adjD * p2), 26);
    }
    result += numToChar(c1) + numToChar(c2);
  }
  return result;
}

function getHillKey(prefix) {
  const a = parseInt(document.getElementById('hill-' + prefix + 'a').value) || 0;
  const b = parseInt(document.getElementById('hill-' + prefix + 'b').value) || 0;
  const c = parseInt(document.getElementById('hill-' + prefix + 'c').value) || 0;
  const d = parseInt(document.getElementById('hill-' + prefix + 'd').value) || 0;
  return [a, b, c, d];
}

function hillEncrypt() {
  const pt = document.getElementById('hill-pt').value;
  if (!pt) { showToast('Please enter plaintext', 'error'); return; }
  const [a, b, c, d] = getHillKey('');
  const res = hillProcess(pt, a, b, c, d, 'enc');
  if (res !== null) { document.getElementById('hill-enc-out').textContent = res; showToast('Encryption complete', 'success'); }
}

function hillDecrypt() {
  const ct = document.getElementById('hill-ct').value;
  if (!ct) { showToast('Please enter ciphertext', 'error'); return; }
  const [a, b, c, d] = getHillKey('d');
  const res = hillProcess(ct, a, b, c, d, 'dec');
  if (res !== null) { document.getElementById('hill-dec-out').textContent = res; showToast('Decryption complete', 'success'); }
}

/* ================================================================
   MONOALPHABETIC SUBSTITUTION CIPHER
   ================================================================ */
function generateMonoAlphabet(inputId) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  document.getElementById(inputId).value = letters.join('');
  showToast('Random substitution alphabet generated', 'success');
}

function monoEncrypt() {
  const pt = document.getElementById('mono-pt').value;
  const key = document.getElementById('mono-key-e').value.toUpperCase();
  if (!pt) { showToast('Please enter plaintext', 'error'); return; }
  if (key.length !== 26 || !/^[A-Z]{26}$/.test(key)) { showToast('Key must be exactly 26 unique letters', 'error'); return; }
  const result = charsOnly(pt).split('').map(c => key[charToNum(c)]).join('');
  document.getElementById('mono-enc-out').textContent = result;
  showToast('Encryption complete', 'success');
}

function monoDecrypt() {
  const ct = document.getElementById('mono-ct').value;
  const key = document.getElementById('mono-key-d').value.toUpperCase();
  if (!ct) { showToast('Please enter ciphertext', 'error'); return; }
  if (key.length !== 26 || !/^[A-Z]{26}$/.test(key)) { showToast('Key must be exactly 26 unique letters', 'error'); return; }
  const rev = {};
  for (let i = 0; i < 26; i++) rev[key[i]] = String.fromCharCode(65 + i);
  const result = charsOnly(ct).split('').map(c => rev[c] || c).join('');
  document.getElementById('mono-dec-out').textContent = result;
  showToast('Decryption complete', 'success');
}

/* ================================================================
   VIGENÈRE CIPHER
   ================================================================ */
function vigenereCore(text, keyword, mode) {
  const clean = charsOnly(text);
  const kw = charsOnly(keyword);
  if (!kw) { showToast('Please enter a keyword', 'error'); return null; }
  let ks = '';
  let result = '';
  for (let i = 0; i < clean.length; i++) {
    const kc = kw[i % kw.length];
    ks += kc;
    const shift = charToNum(kc);
    const n = charToNum(clean[i]);
    result += numToChar(mode === 'enc' ? n + shift : n - shift);
  }
  return { result, ks };
}

function vigenereEncrypt() {
  const pt = document.getElementById('vig-pt').value;
  const key = document.getElementById('vig-key-e').value;
  if (!pt) { showToast('Please enter plaintext', 'error'); return; }
  const out = vigenereCore(pt, key, 'enc');
  if (out) { document.getElementById('vig-enc-out').textContent = out.result; document.getElementById('vig-ks-e').textContent = out.ks; showToast('Encryption complete', 'success'); }
}

function vigenereDecrypt() {
  const ct = document.getElementById('vig-ct').value;
  const key = document.getElementById('vig-key-d').value;
  if (!ct) { showToast('Please enter ciphertext', 'error'); return; }
  const out = vigenereCore(ct, key, 'dec');
  if (out) { document.getElementById('vig-dec-out').textContent = out.result; document.getElementById('vig-ks-d').textContent = out.ks; showToast('Decryption complete', 'success'); }
}


