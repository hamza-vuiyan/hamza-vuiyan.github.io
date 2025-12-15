/* Quick Customization Guide */

/* ===== Floating Cards Customization ===== */

/* Code Card - Change the algorithm shown */
Update in index.html around line 56-71:
- Change function name and code
- Use syntax: keyword, function, variable, operator, bracket, number, comment classes

/* Stats Card - Update your coding stats */
Update in index.html around line 81-92:
- Problems Solved: Change the number
- Contest Rating: Update your rating
- Progress bar: Adjust width percentage in style attribute

/* Tech Stack Card - Update your technologies */
Update in index.html around line 95-108:
- Add/remove tech-tag spans
- Common tags: JavaScript, Python, C++, Java, React, Node.js, MongoDB, etc.

/* ===== Color Customization ===== */

In style.css, update CSS variables (line 2-12):
--primary-color: #6366f1;        /* Main purple color */
--primary-dark: #4f46e5;         /* Darker purple */
--text-dark: #1a1a2e;           /* Main text color */
--text-light: #4a5568;          /* Secondary text */
--gradient-1: Purple gradient    /* Used for highlights */
--gradient-2: Pink gradient      /* Alternative gradient */

/* ===== Navigation Social Icons ===== */

Current icons in navigation (bottom bar):
1. Dribbble (pink) - Design portfolio
2. Behance (blue) - Creative work
3. Medium (black) - Blog
4. Upwork (green) - Freelance

To change:
- Update href="#" to your actual profile URLs
- Change icon classes in index.html
- Modify background colors in style.css (line 107-122)

/* ===== Contact Section Social Links ===== */

Current icons in contact section:
1. GitHub - Code repositories
2. LinkedIn - Professional network
3. Twitter - Social updates
4. CodePen - Code snippets

To change:
- Update href="#" in index.html contact section
- Add more by copying .social-link structure

/* ===== Project Images ===== */

Current projects use these images:
1. webmat.webp - Web Mathematics
2. crud.webp - CRUD Application
3. quiz.png - Quiz App
4. blog.webp - Blog Platform
5. birthday_project.png - Birthday Reminder
6. doodle.webp - Creative Canvas

To update:
- Replace images in assets/ folder
- Update src attributes in index.html
- Keep aspect ratio similar for best results

/* ===== Contact Information ===== */

Update in index.html contact section:
- Email: amir.hamza@example.com
- Phone: +1 (555) 123-4567
- Location: Your City, Country

Also update email in script.js contactForm handler (line 162)

/* ===== Animation Speed ===== */

Floating cards animation speed (style.css):
@keyframes float - Change 3s to adjust speed
animation-delay - Staggers the floating effect

Scroll animations:
transition: all 0.6s ease - Adjust duration

/* ===== Responsive Breakpoints ===== */

Media queries in style.css:
- max-width: 991px - Tablets
- max-width: 768px - Small tablets
- max-width: 576px - Mobile phones

Adjust these to fine-tune responsive behavior.
