```
## 🛠️ Project Stack Setup
The core architectural libraries are pre-configured inside our dependency tree:
 * **Framework container:** Next.js 15 (App Router) with TypeScript
 * **Styling architecture:** Tailwind CSS
 * **Motion system:** Framer Motion (Declarative intersection observers)
 * **Interaction physics:** GSAP (GreenSock Animation Platform) + @gsap/react
 * **Fluid kinematics:** Lenis Smooth Scroll
## 📂 Detailed Folder Structure
```text
csi-portfolio/
├── .gitignore               # Version control exclusion parameters
├── next.config.ts           # Framework compilation configurations
├── package.json             # Workshop core dependency tracking lists
├── package-lock.json        # Direct locking configuration track
├── postcss.config.mjs       # CSS pipeline parsing parameters
├── tailwind.config.ts       # Layout typography and custom style definitions
├── tsconfig.json            # Type safety compilation tracking
│
├── public/                  # Core static asset maps
│   ├── ecoverse_preview.png # Project card layout visual assets
│   ├── jarvis_preview.png   
│   ├── mapmytree_preview.png
│   ├── pms_preview.png      
│   └── sequence/            # Pre-rendered 3D motion image frames (Day 2)
│       ├── frame_000_delay-0.066s.png
│       ├── frame_001_delay-0.066s.png
│       └── ... (up to frame_119)
│
└── src/                     # Core codebase assets
    └── app/
        ├── globals.css      # Custom animations, webkit scrollbars, grain filters
        ├── layout.tsx       # Standard layout envelope establishing font families
        └── page.tsx         # Central landing wrapper with inline neutral header blocks
    │
    └── components/          # Architectural presentation modules
        ├── AboutSection.tsx # Base profile bio section markup Skeletons
        ├── AnimatedBackground.tsx # Reactive floating background node maps
        ├── AnimatedText.tsx # Character reveal scroll bindings
        ├── ContactButton.tsx # Action link containers with vector translations
        ├── CustomCursor.tsx # Liquid trail pointer coordinates listener
        ├── FadeIn.tsx       # Un-animated component envelope (Day 1 Module)
        ├── Footer.tsx       # Dark baseline panel markup placeholder (Day 1 & 2 Module)
        ├── Magnet.tsx       # Element proximity cursor attraction parameters
        ├── Overlay.tsx      # Multi-scene canvas type overrides
        ├── Projects.tsx     # Plain stacked absolute card deck shell (Day 1 Module)
        ├── ScrollyCanvas.tsx # High-performance image loop canvas rendering component
        ├── SkillsSection.tsx # Specialized engineering category display blocks
        └── SmoothScroll.tsx # Lenis scrolling interpolation parameters (Day 2 Module)

```
## ⏳ Workshop Module Sequence Roadmap
The curriculum is structured sequentially to guide your production path across the two active sessions:
### 🌅 Day 1: Micro-Animations, Vector Layout Matrices, & Specular Design
 * **Module 1: Demonstration & Overview** — Visual architecture breakdown of target elements.
 * **Module 2: Entrance Motion Engine (FadeIn.tsx)** — Implementing declarative viewport observations and cubic-bezier velocity curves via Framer Motion.
 * **Module 3: Symmetrical Card Fan Deck (Projects.tsx)** — Writing center-offset index vector spacing calculations to animate absolute elements via GSAP timelines.
 * **Module 4: Optical Glassmorphism (globals.css)** — Engineering heavy background blur filters alongside top-border inset highlights to recreate premium 3D frosted-glass sheets.
### 🌌 Day 2: Image Canvas Playback & Interactive 3D Coordinate Tilting
 * **Module 5: Scroll-Scrubbed Canvas Sequences (ScrollyCanvas.tsx)** — Binding viewport scrolling percentages to scrub frame-by-frame webp/png compressed image nodes directly onto an HTML5 canvas context.
 * **Module 6: Inertial Scrolling Overrides (SmoothScroll.tsx)** — Implementing Lenis momentum friction tracking to convert rigid stepped mouse wheel ticks into soft organic curves.
 * **Module 7: Dynamic Coordinate Tilting Panels (Footer.tsx)** — Configuring perspective view constraints (preserve-3d) and capture mouse pointer coordinates to drive physical 3D card tilting matrices via GSAP.
## ⚙️ Development Environment Workspace Setup
To pull this starter configuration and sync alongside your local terminal, run these commands inside your project root:
```bash
# Verify you are safely coding on the dedicated template branch
git checkout workshop-starter

# Fetch updates and guarantee clean environment execution
npm install
npm run dev

```




