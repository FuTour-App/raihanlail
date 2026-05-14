# 🚀 Futuristic Portfolio — Next.js + GSAP

A clean, animated, modern-futuristic single-page portfolio template built with **Next.js 14**, **GSAP**, **Tailwind CSS**, and **react-icons**.

---

## ✨ Features

- **Hero Section** — Glitch title effect, floating tech badges with mouse parallax, animated scanline
- **About Section** — Scroll-triggered reveal, stats grid, decorative photo frame
- **Projects Section** — Card grid with corner bracket decorations, gradient overlays, tag pills
- **Experience Section** — Animated vertical timeline with pulsing dots
- **Skills Section** — `react-icons` tech stack icons with per-skill glow + category progress bars
- **Contact Section** — Terminal-style form, social links, success state

## 🎨 Design System

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#040812` | Page background |
| `--surface` | `#080f1e` | Card background |
| `--accent` | `#00d4ff` | Primary cyan accent |
| `--accent-2` | `#7b2fff` | Purple accent |
| `--accent-3` | `#ff2d78` | Pink accent |
| `--text` | `#e2eaf5` | Primary text |
| `--muted` | `#5a7498` | Secondary text |

**Fonts**: Syne (display) · Space Mono (mono/labels) · DM Sans (body)

---

## 🛠 Setup

```bash
# 1. Clone / download this folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens, animations, utility classes
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx           # Fixed nav with scroll state
│   ├── Hero.tsx             # Greeting section with GSAP animations
│   ├── About.tsx            # Profile: photo, name, bio, stats
│   ├── Projects.tsx         # Portfolio grid
│   ├── Experience.tsx       # Timeline of work experience
│   ├── Skills.tsx           # Tech stack icons + category bars
│   └── Contact.tsx          # Contact form + social links
└── data/
    └── portfolio.ts         # ← Edit YOUR data here
```

---

## ✏️ Customization

### 1. Update your data
Edit `src/data/portfolio.ts`:
- `projects[]` — add your real projects
- `experiences[]` — add your work history
- `skills` — already populated with common stack

### 2. Update personal info
Search for `Alex Johnson` across components and replace with your name.

### 3. Add your photo
In `About.tsx`, replace the placeholder `<div>` block with:
```tsx
import Image from 'next/image'
// ...
<Image src="/photo.jpg" alt="Your Name" fill className="object-cover" />
```
Then place `photo.jpg` in the `/public` folder.

### 4. Add project images
In `portfolio.ts`, set `imageUrl` to your image path (place in `/public`).
In `Projects.tsx`, replace the gradient placeholder with:
```tsx
import Image from 'next/image'
// ...
{project.imageUrl && <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />}
```

### 5. Colors
Edit CSS variables at the top of `globals.css` to match your brand.

---

## 📦 Dependencies

```json
{
  "next": "14.x",
  "react": "18.x",
  "gsap": "3.x",
  "react-icons": "5.x",
  "tailwindcss": "3.x"
}
```

---

## 🔑 GSAP Usage Pattern

Every section follows this pattern:
```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo('.my-element', 
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      }
    )
  }, sectionRef) // scoped to section
  return () => ctx.revert() // cleanup
}, [])
```

---

Built with ❤️ — feel free to adapt it to your style.
