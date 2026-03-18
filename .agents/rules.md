# Frogverse — Project Rules

## Quy ước bắt buộc
1. **KHÔNG chuyển đổi** bottom navigation bar và profile section — giữ nguyên placeholder.
2. **Luôn sử dụng assets đã export** trong `assets/` thay vì tự tạo SVG mới.
3. **Component-first**: Xây dựng component riêng trước, sau đó ghép vào page.

## Kiến trúc Component
- **Buttons** (`.game-btn`): Ticket-notch SVG auto-inject via `scripts/game-btn.js`. 3 variants: `--gold`, `--green`, `--gray`.
- **Frame Border** (`.game-frame`): CSS `border-image` dùng `assets/Frame.svg`. Pure CSS, no JS.
- **FrogInfoHome** (`.frog-info-home`): 2-layer SVG sandwich (`back.svg` + `front.svg`) với XP bar HTML ở giữa.
- **HomeButton** (`.home-button`): Circular icon button dùng `bg-HomeButtons.svg`.

## Tech Stack
- HTML + CSS + vanilla JS (no framework)
- Bootstrap 5 (grid/modal only)
- Fonts: Alice (buttons), Cormorant (display/headings)
- CSS custom properties cho theming
- SVG assets exported từ Figma, dùng trực tiếp — KHÔNG tự vẽ lại

## File Structure
```
assets/          → SVG/WebP đã export từ Figma
styles/          → CSS (variables, reset, typography, components, home)
scripts/         → JS (game-btn.js, main.js, home.js)
pages/           → HTML pages (home.html, component-preview.html)
components/      → HTML snippets cho reference
```

## Design System
- Xem `pages/component-preview.html` cho component catalog trực quan
- Figma Design System page: node `33-464`
