---
name: portfolio-manager
description: >-
  Operational runbook and workflow guide for maintaining, updating, and extending Tulashi Nayak's Bento-Grid Portfolio website. Use this skill whenever inspecting, modifying, or adding content to the HTML, CSS, JavaScript, assets, or metadata in this portfolio repository.
---

# Portfolio Manager Skill: Tulashi Nayak Portfolio

This skill guides AI agents and developers working on Tulashi Nayak's modern Bento-Grid developer portfolio.

---

## ⚠️ Critical Directives (Strict Enforcement)

1. **NO GITHUB PUSH WITHOUT EXPLICIT USER COMMAND**:
   - **NEVER** run `git push`, `git push origin`, or any command that pushes commits to remote repositories (GitHub, GitLab, etc.) unless the user explicitly and directly commands it (e.g., *"push to github"*, *"github par push kardo"*).
   - Local git operations (status, diff, branch, local commits) may be done if needed, but **remote pushing is strictly prohibited** until user instruction is given.

2. **MANDATORY SKILL CHECK & SYNCHRONIZATION**:
   - **Always consult this skill file** at the start of any portfolio update or review task.
   - Whenever any structural, design, educational, or project changes occur, **update this skill file** to reflect the new state of the repository.

---

## 👤 Profile & Verified Data Record

| Attribute | Verified Value |
| :--- | :--- |
| **Full Name** | **Tulashi Nayak** |
| **Phone** | **8018259637** / `+91 80182 59637` |
| **Email** | **nayaktulashi981@gmail.com** |
| **GitHub** | **https://github.com/nayaktulashi03** |
| **GitHub Pages** | **https://nayaktulashi03.github.io** |
| **Current Role** | MCA Scholar & Aspiring Full-Stack Software Developer |
| **Location** | Odisha, India |

### Educational Milestones
1. **Post Graduation (MCA)** | *2025 – 2027* [Currently Pursuing]
   - **Institution**: NIIS Institute of Business Administration
   - **Specialization**: Master of Computer Applications, Software Architecture, Advanced DBs
2. **Graduation (BCA)** | *2021 – 2024* [Completed]
   - **Institution**: SVM Autonomous College, Jagatsinghpur
   - **Specialization**: Bachelor of Computer Applications, Java, C/C++, Data Structures, DBMS
3. **+2 Higher Secondary** | *2019 – 2021* [Completed]
   - **Institution**: Adikabi Sarala Das College, Tirtol
   - **Stream**: Science, Analytical & Mathematical Foundations
4. **10th Matriculation** | *2018 – 2019* [Completed]
   - **Institution**: Jagannathpur Nodal High School, Tiran
   - **Board**: Secondary School Examination (BSE Odisha)

### Technical Skills
- **Frontend**: HTML5, CSS3, Modern JavaScript (ES6+), Responsive Bento UI
- **Programming Languages**: Java, Python, C, C++
- **Databases**: MySQL, SQL, MongoDB
- **Tools & VCS**: Git, GitHub, VS Code

---

## 🏛️ Codebase & File Structure

```text
portfolio/
├── AGENTS.md                          # Mandatory Agent guidelines & project rules
├── index.html                         # Primary Bento-Grid layout document
├── css/
│   └── style.css                      # Bento styling, ambient glow, theme variables, animations
├── js/
│   └── script.js                      # Navigation, theme toggle, copy triggers, form handlers
├── assets/
│   ├── images/
│   │   ├── hero-character.png         # 3D Girl avatar with laptop & floating tech badges
│   │   ├── about-character.png        # 3D Girl avatar on star badge
│   │   └── contact-character.png      # 3D Girl avatar on phone with message bubble
│   └── cv/
│       └── Tulashi_Nayak_Resume.html  # Formatted resume / printable CV reference
├── .agents/skills/portfolio-manager/
│   └── SKILL.md                       # This canonical operational skill file
└── skills/portfolio-manager/
    └── SKILL.md                       # Mirror copy of this skill file
```

---

## 🎨 Design & Aesthetic Guidelines

- **Layout Style**: Modern Bento Grid inspired by Framer Motion UI mockups.
- **Color Palette**:
  - Main Dark Background: `#070c16` with ambient glow mesh (`#ff8a00` warm radial accents).
  - Bento Card Background: `#0d182e` (solid deep navy matching character assets).
  - Primary Brand Gradient: `linear-gradient(135deg, #ff8a00 0%, #ff5e00 100%)`.
  - Card Border: `1px solid rgba(255, 255, 255, 0.07)`.
  - Border Radius: `28px` for cards, `9999px` for pill buttons and badges.
- **Character Assets**:
  - The 3D character images in `assets/images/` are extracted directly with matching `#0d182e` backgrounds. Always preserve the `#0d182e` card background so that avatar crops blend without seams.

---

## 🚀 Procedure: How to Add New Projects (When User is Ready)

Currently, the user does not have projects deployed, so the bottom-left card displays the **Education & Qualifications** grid along with an **"In Development"** roadmap banner.

When the user specifies that they have completed a project to showcase:
1. **Prepare Project Data**:
   - Title, short 1-2 sentence description, category badge (e.g., Web App, AI, Database).
   - Tech stack tags (e.g., `Java`, `MySQL`, `HTML5`, `CSS3`).
   - Links: GitHub repository URL and live demo URL.
2. **HTML Placement**:
   - Locate the projects container in `index.html`.
   - Add a `.project-mini-card` with browser mockup frame:
     ```html
     <div class="project-mini-card">
       <div class="project-thumb thumb-<category>">
         <div class="browser-dots">
           <span class="dot-red"></span><span class="dot-yellow"></span><span class="dot-green"></span>
         </div>
         <div class="thumb-badge">Category</div>
       </div>
       <div class="project-details">
         <h3 class="project-title">Project Name</h3>
         <p class="project-desc">Concise overview of features and architecture.</p>
         <div class="project-tags">
           <span class="tag">Tech1</span>
           <span class="tag">Tech2</span>
         </div>
         <div class="project-buttons">
           <a href="https://github.com/..." target="_blank" class="btn btn-code"><i class="fa-brands fa-github"></i> Code</a>
           <a href="https://..." target="_blank" class="btn btn-demo"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
         </div>
       </div>
     </div>
     ```
3. **Update Stats Counter**:
   - In `index.html`, adjust the stats counter on the About Me card (`data-target="X"`).
4. **Update This Skill**:
   - Add the project entry into the "Projects Register" section of this skill file.

---

## 🔍 Pre-Release & Verification Checklist

Before reporting completion on any update:
- [ ] **No Git Push**: Verify that no unprompted `git push` command was executed.
- [ ] **Data Accuracy**: Check Tulashi Nayak's phone (`8018259637`), email (`nayaktulashi981@gmail.com`), and all 4 colleges/schools.
- [ ] **Responsive Design**: Ensure mobile view (`< 768px`) displays single-column cleanly without horizontal scrollbars.
- [ ] **Interactive Features**:
  - Theme toggle (Dark/Light mode switch & persistence in `localStorage`).
  - Quick-copy buttons on phone & email show toast feedback.
  - Contact form validates required fields and triggers success message.
  - "Download CV" opens the printable resume document modal.
- [ ] **Skill File Updated**: Confirm this `SKILL.md` is updated if project details or architecture changed.
