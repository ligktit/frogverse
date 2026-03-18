---
description: Quy trình phát triển frontend Frogverse — dùng khi convert Figma screen hoặc tạo component mới
---

// turbo-all

## Bước 1: Kiểm tra component đã có
- Mở `pages/component-preview.html` để xem component catalog hiện tại
- Kiểm tra `styles/components.css` cho CSS đã viết
- Kiểm tra `assets/` cho SVG/WebP đã export

## Bước 2: Quy ước bắt buộc
- **KHÔNG chuyển đổi** bottom navigation bar và profile section
- **Dùng assets đã export** trong `assets/` — KHÔNG tự tạo SVG mới
- **Component-first**: build component riêng trước → ghép vào page sau

## Bước 3: Components đã sẵn sàng
| Component | Class | Cách dùng |
|---|---|---|
| Gold Button | `.game-btn .game-btn--gold` | JS auto-inject SVG, chỉ cần HTML |
| Green Button | `.game-btn .game-btn--green` | Tương tự |
| Gray Button | `.game-btn .game-btn--gray` | Tương tự |
| Frame Border | `.game-frame` | Pure CSS border-image, dùng `Frame.svg` |
| FrogInfoHome | `.frog-info-home` | 2-layer SVG + XP bar HTML |
| HomeButton | `.home-button` | Circular icon button |

## Bước 4: Khi tạo component mới
1. Lấy design context từ Figma (MCP tool)
2. Export SVG assets nếu cần (hoặc hỏi user export)
3. Viết CSS vào `styles/components.css`
4. Thêm demo vào `pages/component-preview.html`
5. Tạo HTML snippet trong `components/`

## Bước 5: Khi convert page
1. Dùng layout shell đã có (header, main, feed section)
2. Ghép components từ catalog
3. Include `scripts/game-btn.js` cho button auto-inject
4. Test ở mobile viewport (402px width)
