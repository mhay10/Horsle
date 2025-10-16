import Tile from './Tile';
import { WORD_LENGTH } from '../constants/game';

/**
 * A single guess row in the grid
 * @param {{
 *  guess?: string,
 *  statuses?: Array<'correct'|'present'|'absent'> | null,
 *  isCurrent?: boolean,
 *  isRevealing?: boolean,
 * }} props
 */
export default function GuessRow({ guess, statuses = null, isCurrent = false, isRevealing = false }) {
  return (
    <div className="guess-row">
      {Array.from({ length: WORD_LENGTH }).map((_, j) => {
        const letter = guess ? guess[j] || '' : '';

        let status = '';
        if (guess && !isRevealing && statuses) {
          status = statuses[j];
        } else if (isCurrent && letter) {
          status = 'current';
        }

        return (
          <Tile
            key={j}
            letter={letter}
            status={isRevealing ? statuses?.[j] : status}
            revealing={isRevealing}
            revealDelayMs={j * 200}
          />
        );
      })}
    </div>
  );
}
