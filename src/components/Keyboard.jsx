import { KEYBOARD_ROWS } from '../constants/keyboard';

/**
 * On-screen keyboard
 * @param {{
 *  keyboardStatus: Record<string, 'correct'|'present'|'absent'|undefined>,
 *  onKeyClick: (key: string) => void,
 * }} props
 */
export default function Keyboard({ keyboardStatus, onKeyClick }) {
  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              className={`key ${keyboardStatus[key] || ''} ${key === 'ENTER' || key === 'BACK' ? 'key-wide' : ''}`}
              onClick={() => onKeyClick(key)}
            >
              {key === 'BACK' ? '\u232b' : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
