export default function Instructions() {
  return (
    <div className="instructions">
      <p>Type a 5-letter word and press Enter</p>
      <div className="legend" aria-label="Color legend">
        <div className="legend-item">
          <span className="legend-swatch correct" aria-hidden="true"></span>
          <span>Correct letter in correct position</span>
        </div>
        <div className="legend-item">
          <span className="legend-swatch present" aria-hidden="true"></span>
          <span>Correct letter in wrong position</span>
        </div>
        <div className="legend-item">
          <span className="legend-swatch absent" aria-hidden="true"></span>
          <span>Letter not in word</span>
        </div>
      </div>
    </div>
  );
}
