import '../styles/gameover.css';

/**
 * Displays game over message and reset button
 * @param {{
 *  won: boolean,
 *  guessCount: number,
 *  onReset: () => void,
 * }} props
 */
export default function GameOverPanel({ won, guessCount, onReset }) {
  return (
    <div className="game-over-overlay">
      <div className="game-over">
        {won ? (
          <>
            <h2>Congratulations!</h2>
            <p>
              You guessed HORSE in {guessCount} {guessCount === 1 ? 'try' : 'tries'}!
            </p>
          </>
        ) : (
          <>
            <h2>Game Over!</h2>
            <p>
              The word was: <strong>HORSE</strong>
            </p>
            <p>(It's always HORSE)</p>
          </>
        )}
        <button onClick={onReset} className="reset-button">
          Play Again
        </button>
      </div>
    </div>
  );
}
