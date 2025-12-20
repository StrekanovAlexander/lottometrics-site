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

export function heatMapAsc(val, min, max) {
  if (max === min) {
    return "bg-heatmap-colddark";
  }
  const norm = (val - min) / (max - min);
  if (norm > 0.9) return "bg-heatmap-hotdark";
  if (norm > 0.7 && norm <= 0.9) return "bg-heatmap-hot";
  if (norm > 0.5 && norm <= 0.7) return "bg-heatmap-middledark";
  if (norm > 0.3 && norm <= 0.5) return "bg-heatmap-middle";
  if (norm > 0.1 && norm <= 0.3) return "bg-heatmap-cold";
  return "bg-heatmap-colddark";
}

export function heatMap2Asc(val, min, max) {
  if (max === min) {
    return "bg-heatmap-colddark";
  }
  const norm = (val - min) / (max - min);
  if (norm > 0.9) return "bg-heatmap-hotdark";
  if (norm > 0.7 && norm <= 0.9) return "bg-heatmap-hot";
  if (norm > 0.5 && norm <= 0.7) return "bg-heatmap-middledark";
  if (norm > 0.3 && norm <= 0.5) return "bg-heatmap-middle";
  if (norm > 0.1 && norm <= 0.3) return "bg-heatmap-cold";
  return "bg-heatmap-colddark";
}

export function heatMapDesc(val, min, max) {
  if (max === min) {
    return "bg-heatmap-colddark";
  }
  const norm = (val - min) / (max - min);
  if (norm < 0.2) return "bg-heatmap-hotdark";
  if (norm >= 0.2 && norm < 0.4) return "bg-heatmap-hot";
  if (norm >= 0.4 && norm < 0.6) return "bg-heatmap-middledark";
  if (norm >= 0.6 && norm < 0.8) return "bg-heatmap-middle";
  if (norm >= 0.8 && norm < 0.9) return "bg-heatmap-cold";
  return "bg-heatmap-colddark"; 
}

export function generateRange(start, finish) {
  return Array.from({ length: finish - start + 1 }, (_, i) => start + i);
}
