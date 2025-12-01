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
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium 
            ${extra === true ? "bg-gray-300 text-gray-800" : "bg-gray-400 text-white"}`}
        >
          {num.trim()}
        </span>
      ))}
    </div>
  );
}
