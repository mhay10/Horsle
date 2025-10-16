import { KEY_STATUS_PRIORITY } from '../constants/keyboard';

/**
 * Merge new letter statuses into existing keyboard status respecting priority
 * @param {Record<string, 'correct'|'present'|'absent'>} existing
 * @param {string} guess
 * @param {Array<'correct'|'present'|'absent'>} statuses
 */
export function mergeKeyboardStatus(existing, guess, statuses) {
  const next = { ...existing };
  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i];
    const status = statuses[i];
    const prev = next[letter];
    if (!prev || KEY_STATUS_PRIORITY[status] > KEY_STATUS_PRIORITY[prev]) {
      next[letter] = status;
    }
  }
  return next;
}
