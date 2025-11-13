import './App.css';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import GameOverPanel from './components/GameOverPanel';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Notification from './components/Notification';
import { useGameState } from './hooks/useGameState';

export default function App() {
  const {
    guesses,
    currentGuess,
    gameOver,
    won,
    revealingRow,
    keyboardStatus,
    notification,
    handleKeyClick,
    resetGame,
  } = useGameState();

  return (
    <div className="App">
      <div className="game-container">
        <Header />
        <Grid
          guesses={guesses}
          currentGuess={currentGuess}
          gameOver={gameOver}
          revealingRow={revealingRow}
        />

        <Keyboard keyboardStatus={keyboardStatus} onKeyClick={handleKeyClick} />

        <Instructions />
      </div>

      <Notification message={notification.message} visible={notification.visible} />

      {gameOver && (
        <GameOverPanel won={won} guessCount={guesses.length} onReset={resetGame} />
      )}
    </div>
  );
}
