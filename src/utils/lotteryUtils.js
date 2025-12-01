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
