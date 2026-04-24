# 📄 SOFTWARE REQUIREMENTS SPECIFICATION (SRS)

## Futuristic Engineering Firm Portfolio Website

---

# 1. 🧭 PROJECT OVERVIEW

**Objective:**
Build a **futuristic, high-performance, animated portfolio website** for an engineering firm specializing in:

* Machine Design
* Machine Programming
* Machine-to-Machine Integration
* Robotics Integration
* AI Systems

**Core Experience:**

> “An intelligent industrial system interface — not just a website”

---

# 2. ⚙️ TECH STACK

Frontend:

* Next.js (App Router)

Styling:

* Tailwind CSS

Animations:

* Framer Motion
* GSAP
* Three.js

State & Validation Forms:

* Zod (for JSON validation)
* React Hook Form (for contact section)

Icons:
* Lucide React

Hosting:

* Vercel (Free)

---

# 3. 📁 PROJECT STRUCTURE (MANDATORY)

```
/app
/components
/data
   team.json
   projects.json
   services.json
   company.json
/public
   /images
      /team
      /projects
      /icons
```

---

# 4. 📊 DATA HANDLING (STRICT RULE)

❗ NO HARDCODING INSIDE COMPONENTS

✔ All content must come from `/data/*.json`
✔ Images must come from `/public/images`
✔ Zod schema validation must be used when parsing JSON to prevent crashes from missing data.

---

## Example: team.json

```json
[
  {
    "name": "John Doe",
    "role": "Robotics Engineer",
    "image": "/images/team/john.jpg",
    "bio": "Expert in automation systems"
  }
]
```

---

## Usage Rule

* Import JSON → validate via Zod → map into UI
* Components must be reusable

---

# 5. 🎨 COLOR SYSTEM (FINAL)

## Theme: Deep Navy + Neon Cyan + Teal

### Background

* #0b1220 (primary)
* #111827 (secondary)
* #1e293b (layers)

### Accent

* #00e5ff (neon cyan)
* #14b8a6 (teal)

### Text

* #ffffff (primary)
* #9ca3af (secondary)
* #6b7280 (muted)

---

## Background Gradient

```
linear-gradient(180deg, #0b1220 0%, #111827 100%)
```

---

## Glass Cards

```
background: rgba(255,255,255,0.05)
border: 1px solid rgba(0,229,255,0.15)
backdrop-blur: 10px
```

---

## Hover Glow

```
box-shadow: 0 0 25px rgba(0,229,255,0.25)
```

---

# 6. 🌐 WEBSITE SECTIONS

---

## 6.1 HERO (Landing)

Content:

* Title
* Subtitle
* CTA

Animation:

* Three.js background (particles/grid)
* Mouse parallax
* Slow motion camera

---

## 6.2 ABOUT

Animation:

* Fade-up (Framer Motion)
* Text reveal

---

## 6.3 TEAM

Data Source:

* team.json

UI:

* Card grid

Animation:

* Hover: lift + glow + slight tilt
* Scroll: stagger reveal

---

## 6.4 SERVICES

Data Source:

* services.json

Animation:

* Icons animate on hover
* Cards slide alternate (left/right)

---

## 6.5 PROJECTS

Data Source:

* projects.json

UI:

* Grid

Animation:

* Hover zoom
* Click → expand modal

---

## 6.6 CONTACT

Form:

* Name
* Email
* Message
* Real-time client-side validation using React Hook Form + Zod (styled as terminal errors)

Service:

* Formspree

Animation:

* Minimal fade-in

---

# 7. ⚡ ANIMATION SYSTEM

## Heavy Animation:

* Hero
* Project transitions

## Light Animation:

* All other sections

---

## Standard Effects

| Element | Animation       |
| ------- | --------------- |
| Section | fade + slide up |
| Cards   | lift + glow     |
| Scroll  | smooth          |
| Hero    | 3D              |

---

## Special Effects

### 1. Boot Sequence Preloader

* Displays a "System Initializing" screen to mask the load time of Three.js 3D assets.

### 2. Flow Lines

* Cyan lines moving across screen

### 3. Pulse Dots

* Moving particles along paths

### 4. Scan Line

```
linear-gradient(90deg, transparent, #00e5ff, transparent)
```

---

# 8. 🧊 UI COMPONENT RULES

* Reusable components only
* No inline styles (use Tailwind)
* No hardcoded text
* Responsive glassmorphism full-screen menu modal for mobile devices.

---

# 9. 📱 RESPONSIVENESS & MOBILE

* Mobile-first responsive grids
* Reduce animation and disable heavy 3D on mobile viewports.
* Mobile Navigation: Full-screen glassmorphism overlay with staggered entrance animations.

---

# 10. 🚀 PERFORMANCE & SEO

* Boot Preloader for Three.js assets
* Lazy load images
* Next.js Metadata API for robust SEO and social sharing tags.
* Optimize assets

---

# 11. 🎯 SPECIAL FEATURE

## System Flow Visualization

Flow:
Machine → Integration → Robot → AI → Output

Animation:

* Moving cyan lines
* Step highlight
* Signal dots

---

# 12. 📦 DELIVERABLES

* Source code
* Live URL (via Vercel)
* Editable JSON data
* Setup instructions

---

# 13. ❗ FINAL RULES

* NO template feel
* NO over-animation
* NO hardcoding
* MUST feel premium

---

# 14. 🧠 DESIGN PRINCIPLE
<!--  -->
> “Energy flowing through engineered systems”
