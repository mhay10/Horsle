/**
 * A single tile in the guess grid
 * @param {{
 *  letter: string,
 *  status?: '' | 'current' | 'correct' | 'present' | 'absent',
 *  revealing?: boolean,
 *  revealDelayMs?: number,
 * }} props
 */
export default function Tile({ letter = '', status = '', revealing = false, revealDelayMs = 0 }) {
  const style = revealing
    ? {
        animationDelay: `${revealDelayMs}ms`,
        '--tile-color':
          status === 'correct' ? '#6aaa64' : status === 'present' ? '#c9b458' : '#787c7e',
      }
    : undefined;

  return (
    <div
      className={`letter-box ${revealing ? 'revealing' : status}`}
      style={style}
      tabIndex={-1}
    >
      {letter}
    </div>
  );
}
