export default function Ball({ num, textColor, bgColor, borderColor }) {
    return (
        <div className={`w-10 h-10 rounded-full flex items-center   
          justify-center font-bold border ${borderColor} ${textColor} ${bgColor}`}>
            {num}
        </div>
    )
}
