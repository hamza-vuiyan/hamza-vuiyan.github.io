# Amir Hamza - Portfolio Website

A modern, single-page scrolling portfolio website showcasing web development and competitive programming skills.

## 🚀 Features

- **Single-Page Scrolling**: Smooth scrolling navigation between sections
- **Programmer-Themed Design**: Code snippets, competitive programming stats, and tech stack showcase
- **Responsive Design**: Works seamlessly on all devices
- **Interactive Elements**: Floating cards, animations, and smooth transitions
- **Project Showcase**: Grid layout displaying portfolio projects
- **Contact Form**: Integrated contact form with email functionality

## 📁 Project Structure

```
PortFolio/
├── index.html              # Main single-page website
├── style.css              # All styles and responsive design
├── script.js              # JavaScript functionality and interactions
├── README.md              # Project documentation
├── sections/              # Separate HTML files for debugging
│   ├── hero.html         # Hello section standalone
│   ├── skills.html       # Skills section standalone
│   ├── work.html         # Work section standalone
│   ├── achievements.html # Achievements section standalone
│   └── contact.html      # Contact section standalone
└── assets/               # Images and media files
    ├── ai4hori.jpg       # Hero section image
    ├── webmat.webp       # Project images
    ├── crud.webp
    ├── quiz.png
    ├── blog.webp
    ├── birthday_project.png
    └── doodle.webp
```

## 🎨 Sections

### 1. Hello Section
- Hero section with introduction
- Floating cards:
  - **Code Card**: QuickSort algorithm snippet
  - **Stats Card**: Competitive programming achievements
  - **Tech Stack Card**: Technologies and languages

### 2. Skills Section
- Four skill categories with animated progress bars:
  - **Programming Languages**: JavaScript, Python, C++, TypeScript, Java
  - **Frameworks & Libraries**: React, Node.js, Next.js, Vue.js, Django
  - **Databases & Tools**: MongoDB, PostgreSQL, Git, Docker
  - **Problem Solving**: DSA, Competitive Programming, System Design, API Development
- Smooth animation on scroll
- Percentage-based skill levels

### 3. Work Section
- Portfolio projects grid
- 6 project cards with:
  - Project images
  - Descriptions
  - Technology tags
  - Hover effects with "View Project" button

### 4. Achievements Section
- 6 achievement cards highlighting:
  - 500+ Problems Solved
  - Contest Rating 1850
  - 20+ Projects Completed
  - Open Source Contributions
  - Technical Certifications
  - Hackathon Wins
- Animated stats counter with live numbers
- Color-coded badges for categories

### 5. Contact Section
- Contact information with icons
- Contact form with validation
- Social media links
- Email integration

### 6. Footer Section
- About information
- Quick navigation links
- Services list
- Contact details
- Social media icons
- Copyright and legal links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript**: Vanilla JS for interactions
- **Bootstrap 5**: Responsive grid system
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 🎯 Key Features

### Floating Cards (Programmer Theme)
1. **Algorithm Code Card**: Shows QuickSort implementation
2. **Coding Stats Card**: Displays problems solved and contest rating
3. **Tech Stack Card**: Lists programming languages and frameworks

### Responsive Design
- Desktop: Full layout with all floating cards
- Tablet: Adjusted card positions and sizes
- Mobile: Optimized layout with scaled cards

### Animations
- Fade-in effects on scroll
- Floating animations for cards
- Parallax background shapes
- Project card hover effects
- Smooth transitions throughout
- Skills progress bar animations
- Stats counter animations
- Achievement cards staggered reveal

## 📝 Customization

### Update Personal Information

1. **Email Address** (in `script.js`):
   ```javascript
   // Line 22 and Contact form handler
   mailto:amir.hamza@example.com
   ```

2. **Social Links** (in `index.html`):
   - Update navigation social icons (Dribbble, Behance, Medium, Upwork)
   - Update contact section social links (GitHub, LinkedIn, Twitter, CodePen)

3. **Hero Image**:
   - Replace `assets/ai4hori.jpg` with your photo

4. **Projects**:
   - Update project images in `assets/` folder
   - Modify project details in Work section

5. **Contact Information**:
   - Update phone number, location in Contact section

### Debugging Individual Sections

Use standalone HTML files in `sections/` folder:
- `sections/hero.html` - Debug Hello section
- `sections/skills.html` - Debug Skills section
- `sections/work.html` - Debug Work section
- `sections/achievements.html` - Debug Achievements section
- `sections/contact.html` - Debug Contact section

These files include all necessary CSS/JS links for independent testing.

## 🚀 Getting Started

1. Clone or download the repository
2. Open `index.html` in your browser
3. Customize content, images, and links
4. Deploy to your hosting service

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Amir Hamza**
- Web Developer & Competitive Programmer
- Portfolio: [Your Website]
- Email: amir.hamza@example.com

---

Made with ❤️ and ☕
