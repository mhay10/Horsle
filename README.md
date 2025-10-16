# Horsle

A tiny Wordle-like game where the answer is always HORSE.

## Project structure

After refactor, the app is split into clear modules:

- `src/components/` — Presentational UI pieces
  - `Header.jsx` — App title and subtitle
  - `Instructions.jsx` — How to play + legend
  - `Grid.jsx` — The grid wrapper for all rows
  - `GuessRow.jsx` — One row of tiles
  - `Tile.jsx` — A single letter tile
  - `Keyboard.jsx` — On-screen keyboard
  - `GameOverPanel.jsx` — Win/Lose message and reset
- `src/hooks/`
  - `useGameState.js` — Encapsulates all game state and handlers
- `src/utils/`
  - `scoreGuess.js` — Wordle-like scoring algorithm
  - `keyboardStatus.js` — Merge letter statuses with priority
- `src/constants/`
  - `game.js` — Game constants: length, max guesses, target word
  - `keyboard.js` — Keyboard layout and status priority
- `src/App.jsx` — Composes everything together
- `src/main.jsx` — App entry

## Run locally

```powershell
npm install
npm run dev
```

Open the printed local URL in your browser.

## Build

```powershell
npm run build
```

The production build goes to `dist/`.

## Notes
- The refactor keeps behavior and styling the same, just splits logic into readable modules.
- Keyboard and grid animations are unchanged.
- The target word is fixed to `HORSE` (by design).