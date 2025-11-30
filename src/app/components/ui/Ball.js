export default function Ball({ num, textColor }) {
    return (
        <div
             className={`w-10 h-10 flex items-center justify-center 
              bg-[url('/images/elements/Lottometrics-3D-Ball-White.png')] 
              bg-cover bg-center font-semibold ${textColor}`}
        >           
            {num}
        </div>
    )
}
