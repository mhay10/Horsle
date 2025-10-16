import { WORD_LENGTH } from '../constants/game';

/**
 * Score a guess using a two-pass algorithm (like Wordle)
 * @param {string} answer - The target answer word (uppercase)
 * @param {string} guess - The guess word (uppercase)
 * @returns {Array<'correct'|'present'|'absent'>}
 */
export function scoreGuess(answer, guess) {
  const statuses = Array(WORD_LENGTH).fill('absent');
  const counts = {};

  // Count letters in the answer
  for (let i = 0; i < WORD_LENGTH; i++) {
    const a = answer[i];
    counts[a] = (counts[a] || 0) + 1;
  }

  // First pass: exact matches
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guess[i] === answer[i]) {
      statuses[i] = 'correct';
      counts[guess[i]] -= 1;
    }
  }

  // Second pass: present letters up to remaining counts
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (statuses[i] !== 'correct') {
      const g = guess[i];
      if (counts[g] > 0) {
        statuses[i] = 'present';
        counts[g] -= 1;
      }
    }
  }

  return statuses;
}
