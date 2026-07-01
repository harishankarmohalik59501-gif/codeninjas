# Coding Ninjas - Frontend Clone

A frontend clone of [codingninjas.com](https://www.codingninjas.com/) built with **React** and **Tailwind CSS** as part of my QSkill Frontend Development Internship (Slab 2).

This is not a pixel-perfect replica. It is a close, responsive approximation of the original website's landing page, showcasing my understanding of React component architecture, Tailwind CSS utility-first styling, and modern frontend practices.

![React](https://img.shields.io/badge/React-19.1-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38bdf8)
![Vite](https://img.shields.io/badge/Vite-6.3-646cff)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Table of Contents

- [About the Project](#about-the-project)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Design Decisions](#design-decisions)
- [What I Learned](#what-i-learned)
- [License](#license)

---

## About the Project

This project was built as the Slab 2 deliverable for my 1-month Frontend Development internship at **QSkill**. The goal was to demonstrate intermediate-level React and CSS skills by building a recognizable clone of a real production website.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19.1 | UI component library |
| Tailwind CSS | 4.1 | Utility-first CSS framework |
| Vite | 6.3 | Build tool and dev server |
| React Router DOM | 7.6 | Client-side routing |

---

## Features

- **Fully responsive** - Works on desktop, tablet, and mobile screen sizes
- **Mobile menu** - Hamburger toggle that opens a dropdown nav on smaller screens
- **Interactive hover effects** - Cards float up on hover, buttons change color, links highlight
- **Smooth scrolling** - Page scrolls smoothly between sections
- **Official branding** - Uses the actual Coding Ninjas logo and favicon
- **Dark theme** - Matches the original website's dark color palette
- **Component-based architecture** - Each section is its own reusable React component
- **Design tokens** - Colors, fonts, and spacing extracted from the real site using `designlang`

---

## Project Structure

```
codingninjas-clone/
├── index.html              # Entry HTML file with meta tags and font imports
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite config with React and Tailwind plugins
├── src/
│   ├── main.jsx            # React entry point, wraps App in BrowserRouter
│   ├── App.jsx             # Root component with route definitions
│   ├── index.css           # Tailwind imports and custom design tokens
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky nav bar with mobile menu toggle
│   │   ├── Hero.jsx        # Hero section with code editor mockup
│   │   ├── StatsBar.jsx    # Platform statistics bar
│   │   ├── CourseCard.jsx  # Reusable course card component
│   │   ├── CoursesSection.jsx  # Courses grid with data array
│   │   ├── WhyUs.jsx       # Features/benefits section
│   │   ├── Testimonials.jsx # Alumni testimonials section
│   │   └── Footer.jsx      # Multi-column footer with socials
│   └── pages/
│       └── Home.jsx        # Home page composing all sections
├── .gitignore
└── LICENSE
```

---

## Getting Started

### Prerequisites

Make sure you have these installed on your machine:

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Git**

### Installation

1. Navigate into the project folder:

```bash
cd codingninjas-clone
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and go to:

```
http://localhost:5173/
```

That's it! The site should be running locally.

---

## Available Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Starts the Vite development server with hot reload |
| `npm run build` | Creates a production-ready build in the `dist/` folder |
| `npm run preview` | Serves the production build locally for testing |

---

## Design Decisions

- **Tailwind CSS v4** - I used the newer version of Tailwind that supports the `@theme` block directly in CSS. This let me define all my design tokens (colors, fonts) in `src/index.css` without needing a separate `tailwind.config.js` file.

- **Mulish font** - The original Coding Ninjas website uses Mulish as its primary font. I imported it from Google Fonts to match the look and feel.

- **Dark theme colors** - I extracted the color palette from the actual website using a design extraction tool. The main colors used are:
  - Primary orange: `#f66c3b`
  - Dark backgrounds: `#000000`, `#141414`, `#1a1a1a`, `#1f1f1f`
  - Text colors: `#fafafa` (white), `#bbbbbb` (muted), `#838485` (grey)
  - Accent blue: `#12b8ff`

- **Unsplash images for courses** - Since the original course thumbnails are behind their CDN, I used relevant tech-themed images from Unsplash as stand-ins.

- **Logo on dark background** - The official SVG logo has dark colors that are invisible on the dark nav/footer. I wrapped the logo in a small white rounded container so it stays readable without breaking the original branding.

- **No backend** - This is purely a frontend clone. Buttons like "Login" and "Sign up" don't connect to any backend. Links point to `#` placeholders.

---

## What I Learned

Building this project helped me practice and improve in several areas:

- **React component composition** - Breaking a big page into small, focused components that each handle one section
- **Props and data mapping** - Passing course data and testimonial data as arrays and rendering them with `.map()`
- **Tailwind CSS responsive design** - Using utility classes like `md:grid-cols-4`, `lg:px-8`, `hidden md:flex` to handle different screen sizes
- **State management with useState** - Used for the mobile menu toggle in the Navbar
- **CSS hover animations** - Adding subtle translate and shadow effects on card hover
- **Vite as a build tool** - Understanding how Vite handles hot module replacement and builds

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Built by Hari Shankar Mohalik** | QSkill Frontend Development Internship - Slab 2
