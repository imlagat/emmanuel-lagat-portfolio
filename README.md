# Emmanuel Lagat — Personal Portfolio Website

> **Positioning:** Developer. Security-Focused Thinker. Technology Builder.  
> *"Building with purpose. Securing with intention."*

This repository contains the complete personal portfolio website for **Emmanuel Kipkorir Lagat**, built with modern, accessible, high-performance web standards (Semantic HTML5, CSS3 with CSS Custom Properties, and vanilla modular JavaScript).

---

## 🚀 Features

- **Zero-Dependency Architecture**: Fast load times, 100/100 Core Web Vitals, instant rendering without any build step overhead.
- **Cyber-Tech Aesthetic**: Dark mode by default with cyber-emerald and cyan accents, plus a light mode toggle with persistent state in `localStorage`.
- **Interactive Defensive Security Terminal**: Embedded interactive Linux terminal simulation where visitors can type commands (`help`, `scan`, `status`, `whoami`, `skills`, `projects`, `clear`) or click preset buttons.
- **Evidence-First Project Showcase**: Filter projects by discipline (`All`, `Full-Stack`, `Cybersecurity`, `Web & AI`), inspect tech stacks, and open comprehensive case study modal windows.
- **No-Fluff Technical Skills Matrix**: Categorized cleanly by discipline (Frontend, Backend, Databases, Cybersecurity, Tools, AI & Design) without arbitrary percentage bars.
- **Accessible & Responsive**: Fully responsive from mobile devices (375px) to ultra-wide displays with semantic tags, ARIA roles, keyboard focus rings, and mobile flyout drawer.
- **Contact Channels & Copy Helper**: One-click email copy with instant toast confirmation and interactive contact form with validation.

---

## 📁 Project Structure

```
portofolio/
├── index.html              # Main page structure, SEO metadata & sections
├── styles/
│   ├── main.css            # Design system tokens, typography, grid, layout
│   └── components.css      # Terminal widget, modal dialog, toast alerts, drawer
├── scripts/
│   └── app.js              # Theme switcher, terminal simulator, project filters, modal
├── package.json            # Local preview scripts
└── README.md               # Documentation & setup guide
```

---

## 💻 How to Run Locally

### Option 1: Direct File Opening
Double-click `index.html` or open it directly in any browser (Chrome, Firefox, Safari, Edge).

### Option 2: Using Python (Built-in)
```bash
python3 -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

### Option 3: Using npm
```bash
npm start
```

---

## 🌐 Deploying to the Web

### GitHub Pages (Recommended)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Emmanuel Lagat portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Vercel / Netlify
- Drag and drop the `portofolio` directory directly into [app.netlify.com/drop](https://app.netlify.com/drop) or import the repository in [Vercel](https://vercel.com).
- No build command required; publish directory is `./`.

---

## 📝 Customization

- **Contact Email**: Configured as `lagatemmanuel07@gmail.com` in `index.html` and `scripts/app.js`.
- **Social Profiles**: Update the GitHub and LinkedIn URLs in `index.html` to point to your exact profile handles.
- **Projects**: To add or edit projects, modify the cards in `index.html` and the corresponding case study entries in `PROJECT_DATA` inside `scripts/app.js`.
