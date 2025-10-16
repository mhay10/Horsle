import GuessRow from './GuessRow';
import { MAX_GUESSES, WORD_LENGTH, TARGET_WORD } from '../constants/game';
import { scoreGuess } from '../utils/scoreGuess';

/**
 * The game grid with all rows
 * @param {{
 *  guesses: string[],
 *  currentGuess: string,
 *  gameOver: boolean,
 *  revealingRow: number | null,
 * }} props
 */
export default function Grid({ guesses, currentGuess, gameOver, revealingRow }) {
  const rows = [];

  for (let i = 0; i < MAX_GUESSES; i++) {
    const guess = guesses[i];
    const isCurrentRow = i === guesses.length && !gameOver;
    const isRevealing = i === revealingRow;
    const statuses = guess ? scoreGuess(TARGET_WORD, guess) : null;

    rows.push(
      <GuessRow
        key={i}
        guess={guess || (isCurrentRow ? currentGuess : undefined)}
        statuses={statuses}
        isCurrent={isCurrentRow}
        isRevealing={isRevealing}
      />
    );
  }

  return <div className="grid">{rows}</div>;
}
