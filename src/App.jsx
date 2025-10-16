import './App.css';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import GameOverPanel from './components/GameOverPanel';
import Header from './components/Header';
import Instructions from './components/Instructions';
import { useGameState } from './hooks/useGameState';

export default function App() {
  const {
    guesses,
    currentGuess,
    gameOver,
    won,
    revealingRow,
    keyboardStatus,
    handleKeyClick,
    resetGame,
  } = useGameState();

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Grid
          guesses={guesses}
          currentGuess={currentGuess}
          gameOver={gameOver}
          revealingRow={revealingRow}
        />

        <Keyboard keyboardStatus={keyboardStatus} onKeyClick={handleKeyClick} />

        <Instructions />
      </div>

      {gameOver && (
        <GameOverPanel won={won} guessCount={guesses.length} onReset={resetGame} />
      )}
    </div>
  );
}
