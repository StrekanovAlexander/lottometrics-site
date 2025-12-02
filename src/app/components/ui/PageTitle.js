import { Anton } from "next/font/google";
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function PageTitle({title, description = null}) {
    return (
        <div className="bg-gray-100 mb-8 px-8 p-6">
            <h1 className={`${anton.className} text-gray-900 text-2xl md:text-3xl font-extrabold`}>
                {title}
            </h1>
            {description &&
                <p className="text-gray-600 font-semibold">
                    {description}
                </p>
            }
        </div> 
    )
}