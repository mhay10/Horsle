import { useEffect, useState, useCallback } from 'react';
import { MAX_GUESSES, WORD_LENGTH, TARGET_WORD } from '../constants/game';
import { scoreGuess } from '../utils/scoreGuess';
import { mergeKeyboardStatus } from '../utils/keyboardStatus';

export function useGameState() {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [revealingRow, setRevealingRow] = useState(null);
  const [keyboardStatus, setKeyboardStatus] = useState({});

  const submitGuess = useCallback(() => {
    if (currentGuess.length !== WORD_LENGTH || gameOver) return;

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setRevealingRow(newGuesses.length - 1);

    // Update keyboard status
    const statuses = scoreGuess(TARGET_WORD, currentGuess);
    setKeyboardStatus((prev) => mergeKeyboardStatus(prev, currentGuess, statuses));

    // After reveal animation, check win/loss
    setTimeout(() => {
      setRevealingRow(null);
      if (currentGuess === TARGET_WORD) {
        setWon(true);
        setGameOver(true);
      } else if (newGuesses.length >= MAX_GUESSES) {
        setGameOver(true);
      }
    }, WORD_LENGTH * 300 + 100);

    setCurrentGuess('');
  }, [currentGuess, gameOver, guesses]);

  const handleKeyPress = useCallback(
    (e) => {
      if (gameOver) return;

      if (e.key === 'Enter') {
        submitGuess();
      } else if (e.key === 'Backspace') {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (/^[a-zA-Z]$/.test(e.key) && currentGuess.length < WORD_LENGTH) {
        setCurrentGuess((prev) => (prev + e.key).toUpperCase());
      }
    },
    [gameOver, currentGuess.length, submitGuess]
  );

  useEffect(() => {
    if (!gameOver) {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [handleKeyPress, gameOver]);

  const handleKeyClick = useCallback(
    (key) => {
      if (gameOver) return;
      if (key === 'ENTER') {
        submitGuess();
      } else if (key === 'BACK') {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (currentGuess.length < WORD_LENGTH) {
        setCurrentGuess((prev) => prev + key);
      }
    },
    [gameOver, currentGuess.length, submitGuess]
  );

  const resetGame = useCallback(() => {
    setGuesses([]);
    setCurrentGuess('');
    setGameOver(false);
    setWon(false);
    setRevealingRow(null);
    setKeyboardStatus({});
  }, []);

  return {
    guesses,
    currentGuess,
    gameOver,
    won,
    revealingRow,
    keyboardStatus,
    submitGuess,
    handleKeyClick,
    resetGame,
  };
}
