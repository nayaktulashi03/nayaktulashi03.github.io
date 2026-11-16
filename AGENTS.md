# AGENTS.md — Rules & Operational Guidelines for Tulashi Nayak's Portfolio

Welcome, Agent. You are operating inside the repository for **Tulashi Nayak's Personal Developer Portfolio**.
You must strictly adhere to the following non-negotiable rules whenever you inspect, modify, or extend this project.

---

## ⛔ RULE 1: STRICT GITHUB PUSH RESTRICTION (MANDATORY)

- **DO NOT PUSH TO GITHUB OR ANY REMOTE REPOSITORY UNDER ANY CIRCUMSTANCES UNLESS THE USER EXPLICITLY INSTRUCTS YOU TO DO SO.**
- Commands such as `git push`, `git push origin`, or any alias or network push action are **STRICTLY BARRED** until the user types an explicit instruction like *"Push to GitHub"*, *"GitHub par push kardo"*, etc.
- Local git operations (e.g., `git status`, `git diff`, local commits, local branches) are permitted only if necessary, but **NEVER run a push command without explicit permission**.

---

## 📋 RULE 2: MANDATORY SKILL FILE CHECK & SYNCHRONIZATION

- **ALWAYS check the project skill file** before making modifications:
  - Path: [`.agents/skills/portfolio-manager/SKILL.md`](file:///c:/Users/priti/OneDrive/Desktop/portfolio/.agents/skills/portfolio-manager/SKILL.md) (and [`skills/portfolio-manager/SKILL.md`](file:///c:/Users/priti/OneDrive/Desktop/portfolio/skills/portfolio-manager/SKILL.md)).
- If the project's data, qualifications, skills, layout, or features change:
  - **You MUST update the skill file** to reflect those changes so that subsequent agent runs have up-to-date context.

---

## 👤 RULE 3: VERIFIED OWNER & PROFILE DATA

Never fabricate or guess personal information. Always refer to this verified profile data:

- **Full Name**: Tulashi Nayak
- **Phone Number**: `+91 8018259637` / `8018259637`
- **Email**: `nayaktulashi981@gmail.com`
- **GitHub**: `https://github.com/nayaktulashi03`
- **GitHub Pages**: `https://nayaktulashi03.github.io`
- **Current Academic Status**: MCA Student (2025–2027)
- **Location**: Odisha, India

### Verified Education Trajectory:
1. **Post Graduation (MCA)**: NIIS Institute of Business Administration *(2025 – 2027)* — *Currently Pursuing*
2. **Graduation (BCA)**: SVM Autonomous College, Jagatsinghpur *(2021 – 2024)* — *Completed*
3. **+2 Higher Secondary**: Adikabi Sarala Das College, Tirtol *(2019 – 2021)* — *Completed*
4. **10th Matriculation**: Jagannathpur Nodal High School, Tiran *(2018 – 2019)* — *Completed*

### Verified Technical Skills:
- **Languages**: Java, Python, C, C++, JavaScript (ES6+), SQL
- **Web Technologies**: HTML5, CSS3, Modern JavaScript, Responsive Bento Grid Architecture
- **Databases**: MySQL, SQL, MongoDB
- **Tools**: Git, GitHub, VS Code

---

## 🎨 RULE 4: DESIGN & BENTO GRID INTEGRITY

- The design is based on the reference mockups with dark-mode Bento-grid aesthetics.
- **Card Background**: `#0d182e` (deep navy). This matches the exact sampled background of the cropped 3D character avatars (`hero-character.png`, `about-character.png`, `contact-character.png`). Never change this card background to another shade without ensuring character asset blending.
- **Outer Canvas Background**: `#070c16` with warm orange/amber radial glow (`#ff8a00`).
- **Typography**: Outfit for bold headlines, Plus Jakarta Sans for clean body text.
- **Pill Buttons & Badges**: Fully rounded `border-radius: 9999px` with smooth micro-interactions.

---

## 🚀 RULE 5: PROJECT ADDITION PROTOCOL

- As of now, the user has **no deployed projects**. The bottom-left Bento card is purposefully dedicated to **Education & Qualifications** along with an active **"Projects Under Development"** banner.
- When Tulashi asks to add real projects:
  - Follow the template defined in `SKILL.md`.
  - Maintain the browser mockup frame styling with macOS window dots (`.dot-red`, `.dot-yellow`, `.dot-green`).
  - Provide direct GitHub repository and live demo triggers.
  - Update `SKILL.md` with the new project details.

---

## 🛠️ RULE 6: VERIFICATION BEFORE TURNING OVER

Before concluding any task:
1. Ensure `index.html`, `css/style.css`, and `js/script.js` are free of syntax errors.
2. Verify all clickable triggers (modals, copy buttons, links, theme switch).
3. Confirm that no remote git push was performed.
4. Confirm `SKILL.md` is in sync.
