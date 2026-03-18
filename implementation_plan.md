# Frogverse — Component-First Plan (Revised with Figma DS)

## Source: Figma Design System Page `33:464`

> [!IMPORTANT]
> **Excluded**: Bottom Navigation Bar, Profile Section

---

## Official Figma Components → HTML/CSS

### Phase 1 — Buttons & Controls (`BUTTON` group)

| Figma Name | Node ID | States | File |
|---|---|---|---|
| **Gold1** | `33:1813` | Default, Hover, Pressed | `components/btn-gold.html` |
| **Green1** | `49:703` | Default, Hover, Pressed | `components/btn-green.html` |
| **Gray** | `187:8745` | Default, Hover, Pressed | `components/btn-gray.html` |
| **CircleCheck** | `183:3262` | Checked, Unchecked | `components/circle-check.html` |
| **Checkbox** | `184:4540` | Checked, Unchecked | `components/checkbox.html` |
| **Toggle** | `187:6451` | Default, Active | `components/toggle.html` |

> **Key Insight**: All 3 buttons use **SVG backgrounds** (`BtnBg`) + **Alice font** 18px. Gold = dark brown text `#79401d`, Green = gold gradient text, Gray = outlined variant.

---

### Phase 2 — Cards (`CELL` group)

| Figma Name | Node ID | Variants | File |
|---|---|---|---|
| **FrogRentalCell** | `33:1827` | — | `components/frog-rental-card.html` |
| **FrogRentalCell2** | `89:1043` | — | `components/frog-rental-card-sm.html` |
| **FrogsCard** | `33:1180` | King, Queen, Prince, Princess, Consort | `components/frog-card.html` |
| **FrogCard2** | `89:1041` | King, Queen, Prince, Princess, Consort | `components/frog-card-detail.html` |
| **FrogCard3** | `225:6848` | King, Queen, Prince, Princess, Consort | `components/frog-card-lg.html` |
| **MyFrogCard** | `225:9155` | — | `components/my-frog-card.html` |

---

### Phase 3 — List Items & Cells

| Figma Name | Node ID | File |
|---|---|---|
| **Leaderboard Cell** | `49:933` | `components/leaderboard-row.html` |
| **MoneyCell** | `49:954` | `components/money-cell.html` |
| **MoneyCell2** | `197:8331` | `components/money-cell-detail.html` |
| **RankCell** | `251:9076` | `components/rank-cell.html` |
| **MyFrogContainer** | `108:2438` | `components/my-frog-container.html` |

---

### Phase 4 — Compound Components

| Figma Name | Node ID | File |
|---|---|---|
| **Stepper** | `190:6769` | `components/stepper.html` |
| **FrogInfoHome** | `192:6573` | `components/frog-info-home.html` |
| **HomeButtons** | `192:6783` | `components/home-side-btn.html` |
| **1ST/2ND/3RD PLACE** | `103:2273-2275` | `components/podium.html` |
| **FrogRank** | `33:1174` | `components/frog-rank-badge.html` |
| **Emotions** | `225:8737` | `components/frog-emotion.html` |

---

### Phase 5 — Page Layout Shell

| Component | File |
|---|---|
| Page Container (gold border frame) | `components/page-container.html` |
| Page Header (back + title + close) | `components/page-header.html` |
| Top Header Bar | `components/top-header.html` |

---

## Conversion Order

```
1. Buttons (Gold, Green, Gray) + Controls (Check, Checkbox, Toggle)
2. Cards (FrogCard variants, RentalCell, MyFrogCard)
3. List Items (Leaderboard, Money, Rank cells)
4. Compound (Stepper, Podium, FrogRank badges)
5. Layout Shell (Container, Header)
6. Assemble Pages: Home → My Frog → Rental → Leaderboard → Menu → Wallet → Dashboard
```

## Verification
- Per component: Figma `get_design_context` → convert → browser verify
- Per page: Screenshot comparison at 375/390/402px
