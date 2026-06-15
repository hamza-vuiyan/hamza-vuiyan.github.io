# Cipher Nexus — Build Plan

## File
Overwrite `cipher.html` with a complete single-file HTML/CSS/JavaScript application.

## Theme & Design
- **Palette**: `#0a0a0a` (bg), `#00ff41` (neon green), `#003b00` (dark green), `#1a1a1a` (card bg)
- **GPU-Friendly Animated Background**:
  - CSS grid overlay with animated diagonal/radial gradients (`@keyframes` pulse)
  - Scan-line overlay via `repeating-linear-gradient`
  - Glow effects via CSS `box-shadow`/`text-shadow` with `rgba()`
  - No canvas (zero CPU cost)
- **Glassmorphism cards**: `backdrop-filter: blur(12px)`, semi-transparent backgrounds
- **Typography**: `'Courier New'`, `monospace` for terminal feel + system sans-serif for body
- **Responsive**: CSS Grid/Flexbox, media queries at 1024px and 768px breakpoints

## HTML Structure

| Section | Details |
|---|---|
| **Head** | Meta charset/viewport, title "Cipher Nexus", embedded `<style>` block |
| **Animated Background** | CSS-only animated gradients + scan-line overlay |
| **Header** | "Cipher Nexus" title, "Classical Cryptography Learning Lab" subtitle, intro paragraph |
| **Cipher Cards (×5)** | Collapsible `<details>`/`<summary>` sections: Caesar, Playfair, Hill, Monoalphabetic, Vigenère |
| — What Is It | Historical background, inventor, purpose, significance |
| — How It Works | Step-by-step explanation, mathematical concept, worked example |
| — Interactive Panels | Encrypt (left) and Decrypt (right) panels with inputs/buttons/outputs |
| — Educational Features | Advantages, disadvantages, security level, use cases, interesting facts |
| **Comparison Table** | Cipher Name, Type, Key Requirement, Difficulty, Security Level |
| **Quiz Section** | 5 multiple-choice questions, instant feedback, score display |
| **Footer** | Educational disclaimer, "Built for learning cryptography concepts" |

## Cipher Algorithms (JavaScript)

| Algorithm | Functions | Details |
|---|---|---|
| **Caesar** | `caesarEncrypt(text, shift)` / `caesarDecrypt(text, shift)` | Shift 1–25, A-Z wrap, strip non-alpha |
| **Playfair** | `playfairEncrypt(text, key)` / `playfairDecrypt(text, key)` | Build 5×5 matrix from keyword, digraph rules (same-letter insert 'X', odd-pad 'X'), I/J merged |
| **Hill (2×2)** | `hillEncrypt(text, key)` / `hillDecrypt(text, key)` | 2×2 matrix, modular 26 arithmetic, matrix inversion via determinant `modInverse` |
| **Monoalphabetic** | `monoEncrypt(text, sub)` / `monoDecrypt(text, sub)` | Custom/random substitution alphabet |
| **Vigenère** | `vigenereEncrypt(text, keyword)` / `vigenereDecrypt(text, keyword)` | Repeat keyword keystream, per-character modular shift |

## Interactive Features
- Encrypt/Decrypt buttons with real output
- Copy button (`navigator.clipboard.writeText`)
- Clear button (reset inputs/outputs)
- Toast notification system (CSS-animated slide-in, auto-dismiss 3s)
- Input validation (alphabet-only, key requirements)

## Quiz Questions (5)
Focused on classical ciphers (Caesar shift range, Playfair digraph rules, Hill matrix dimensions, Vigenère keystream, monoalphabetic key space).

## Responsive Breakpoints
- **≥1024px**: Side-by-side encrypt/decrypt panels
- **768–1023px**: Stacked panels, smaller cards
- **<768px**: Single column, full-width panels, larger tap targets

## Deliverable
Single `cipher.html` file with all CSS in `<style>` and all JS in `<script>`. Works offline, zero dependencies.
