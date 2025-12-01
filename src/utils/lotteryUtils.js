export function renderBalls(numbersString, extra = false) {
  if (!numbersString) return null;

  const str = Array.isArray(numbersString)
    ? numbersString.join(",")
    : String(numbersString);

  return (
    <div className="flex justify-center space-x-2">
      {str.split(",").map((num, idx) => (
        <span
          key={idx}
            className={`ball ${extra ? "ball-extra" : "ball-main"}`}
        >
          {num.trim()}
        </span>
      ))}
    </div>
  );
}

export function renderTableBalls(numbersString, extra = false) {
  if (!numbersString) return null;

  const str = Array.isArray(numbersString)
    ? numbersString.join(",")
    : String(numbersString);

  return (
    <div className="flex justify-center space-x-2">
      {str.split(",").map((num, idx) => (
        <span
          key={idx}
            className={`ball ${extra ? "ball-extra-tbl" : "ball-main-tbl"}`}
        >
          {num.trim()}
        </span>
      ))}
    </div>
  );
}

export function getFrequencyColor(freq, minFreq, maxFreq) {
  if (maxFreq === minFreq) {
    return "bg-gray-300 text-black";
  }
  const norm = (freq - minFreq) / (maxFreq - minFreq);
  if (norm >= 0.66) return "cell-green";
  if (norm >= 0.33) return "cell-lightgreen";
  if (norm > 0) return "cell-yellow";
  return "cell-gray";
}

