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
    return "bg-gray-300";
  }
  const norm = (freq - minFreq) / (maxFreq - minFreq);
  if (norm >= 0.66) return "bg-softgreen";
  if (norm >= 0.33) return "bg-lightgreen";
  if (norm > 0)     return "bg-softyellow";

  return "bg-gray-300";
}

