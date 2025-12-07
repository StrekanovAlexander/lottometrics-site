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
            // className={`ball ${extra ? "ball-extra" : "ball-main"}`}
            style={{width: "30px", height: "30px", 
              backgroundColor: extra ? "silver" : "gray", borderRadius: "50%", 
              lineHeight: "30px", textAlign: "center", fontWeight: "bold",
              color: extra ? "black" : "white"
            }}
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
            // className={`ball ${extra ? "ball-extra-tbl" : "ball-main-tbl"}`}
            style={{width: "30px", height: "30px", 
              backgroundColor: extra ? "silver" : "gray", borderRadius: "50%", 
              lineHeight: "30px", textAlign: "center", fontWeight: "bold",
              color: extra ? "black" : "white"
            }}
        >
          {num.trim()}
        </span>
      ))}
    </div>
  );
}

export function frequencyColor(freq, minFreq, maxFreq) {
  if (maxFreq === minFreq) {
    return "bg-heatmap-10";
  }
  const norm = (freq - minFreq) / (maxFreq - minFreq);
  if (norm >= 0.90) return "bg-heatmap-1";
  if (norm >= 0.80) return "bg-heatmap-2";
  if (norm >= 0.70) return "bg-heatmap-3";
  if (norm >= 0.60) return "bg-heatmap-4";
  if (norm >= 0.50) return "bg-heatmap-5";
  if (norm >= 0.40) return "bg-heatmap-6";
  if (norm >= 0.30) return "bg-heatmap-7";
  if (norm >= 0.20) return "bg-heatmap-8";
  if (norm >= 0.10) return "bg-heatmap-9";
  return "bg-heatmap-10";
}
