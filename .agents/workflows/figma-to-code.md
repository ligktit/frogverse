---
description: Step-by-step workflow for converting Figma screens to pixel-perfect HTML/CSS/JS
---

# Figma-to-Code Conversion Workflow

// turbo-all

Use this workflow when the user provides a Figma URL or asks to convert a screen.

## Step 1: Extract Design Tokens

1. Get the Figma node ID from the URL (format: `node-id=X-Y` → `X:Y`)
2. Run `get_variable_defs` on the node to extract colors, fonts, spacing
3. Update `styles/variables.css` with extracted CSS custom properties
4. Update `styles/typography.css` with the correct font imports

## Step 2: Analyze the Screen

1. Run `get_screenshot` to capture the visual reference
2. Run `get_metadata` to understand the layer hierarchy
3. Identify reusable components (buttons, cards, nav items, etc.)
4. Save screenshots to `.gemini/antigravity/brain/<conversation-id>/` for comparison

## Step 3: Convert Components

For each identified component:

1. Run `get_design_context` with `artifactType=COMPONENT_WITHIN_A_WEB_PAGE_OR_APP_SCREEN`
2. Adapt the reference code to use project CSS variables
3. Create semantic HTML with proper accessibility attributes
4. Write component CSS in `styles/components.css`
5. Save reusable HTML snippets to `components/`

## Step 4: Assemble the Page

1. Run `get_design_context` with `artifactType=WEB_PAGE_OR_APP_SCREEN` on the full screen
2. Create the page HTML file in `pages/`
3. Use CSS Grid/Flexbox for layout
4. Include all component HTML snippets
5. Ensure mobile-first responsive design

## Step 5: Add Interactions

1. Identify interactive elements (buttons, modals, transitions)
2. Write JS handlers in `scripts/`
3. Add CSS animations/transitions
4. Wire up navigation between pages

## Step 6: QA & Verify

1. Open the page in browser using `browser_subagent`
2. Take a browser screenshot
3. Compare browser screenshot with Figma screenshot side-by-side
4. Run responsive tests at 375px, 390px, 414px, 430px widths
5. Use `web-design-guidelines` skill to audit accessibility
6. Fix any pixel-level discrepancies

## Conversion Rules

> **DO NOT convert** the following shared elements — they are handled separately:
> - ❌ **Bottom Navigation Bar** — skip entirely
> - ❌ **Profile Section** (frog info badge with avatar/name/XP) — skip entirely

Focus only on the **unique content** of each screen.

## Notes

- Always use the existing CSS variables from `styles/variables.css`
- Follow the `frontend-design` skill guidelines for aesthetic quality
- Use the `webapp-testing` skill for automated Playwright tests when needed
- Reference `hack23/homepage@html-css-best-practices` for HTML/CSS quality
