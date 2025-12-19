import { useDashboard } from "@/context/DashboardContext";

export default function FrequencyCategoriesPart({calculatedData}) {
    const { selectedNumber, setSelectedNumber } = useDashboard();
    const data = [...calculatedData];
    const notDrawnNumbers = data.filter(el => el.category === 'none').map(el => el.draw_number).sort((a, b) => a - b);
    const hotNumbers = data.filter(el => el.category === 'hot').map(el => el.draw_number).sort((a, b) => a - b);
    const coldNumbers = data.filter(el => el.category === 'cold').map(el => el.draw_number).sort((a, b) => a - b);
    const middleNumbers = data.filter(el => el.category === 'middle').map(el => el.draw_number).sort((a, b) => a - b);

    return (
        <div className="bg-gray-50 border border-gray-300 rounded-md p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
                Number Frequency Categories
            </h2>
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
                <thead>
                    <tr className="border-b border-gray-200 text-sm text-gray-700 text-left">
                        <th className="px-2 py-1 w-32">Category</th>
                        <th className="px-2 py-1">Numbers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-100">
                        <td className="px-2 py-2 text-sm text-gray-600">
                            Hot Numbers    
                        </td>
                        <td className="px-2 py-2 flex gap-1 items-center justify-start py-1">
                            {hotNumbers.length === 0 
                                ? 'No data' 
                                : hotNumbers.map((el, ix) => {
                                    const elClass = selectedNumber === el ? 'bg-heatmap-active' : 'border border-4 border-heatmap-1';
                                    return (
                                        <span
                                            key={ix}
                                            onClick={() => setSelectedNumber(el)} 
                                            className={`${elClass} w-6 h-6 flex items-center justify-center 
                                                rounded-full text-xs font-semibold cursor-pointer`}
                                        >
                                            {el}
                                        </span>
                                )})
                            }
                        </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                        <td className="px-2 py-2 text-sm text-gray-600">
                            Middle Numbers    
                        </td>
                        <td className="px-2 py-2 flex flex-wrap gap-1 items-center justify-start py-1">
                            {middleNumbers.length === 0 
                                ? 'No data' 
                                : middleNumbers.map((el, ix) => {
                                    const elClass = selectedNumber === el ? 'bg-heatmap-active' : 'border border-4 border-heatmap-6';
                                    return (
                                        <span
                                            key={ix}
                                            onClick={() => setSelectedNumber(el)} 
                                            className={`${elClass} w-6 h-6 flex items-center justify-center 
                                                rounded-full text-xs font-semibold cursor-pointer`}
                                        >
                                            {el}
                                        </span>
                                    )})
                            }
                        </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                        <td className="px-2 py-2 text-sm text-gray-600">
                            Cold Numbers    
                        </td>
                        <td className="px-2 py-2 flex flex-wrap gap-1 items-center justify-start py-1">
                            {coldNumbers.length === 0 
                                ? 'No data' 
                                : coldNumbers.map((el, ix) => {
                                    const elClass = selectedNumber === el ? 'bg-heatmap-active' : 'border border-4 border-heatmap-10';
                                    return (
                                        <span
                                            key={ix}
                                            onClick={() => setSelectedNumber(el)} 
                                            className={`${elClass} w-6 h-6 flex items-center justify-center 
                                                rounded-full text-xs font-semibold cursor-pointer`}
                                        >
                                            {el}
                                        </span>
                                    )
                                })
                            }
                        </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                        <td className="px-2 py-2 text-sm text-gray-600">
                            Not drawn    
                        </td>
                        <td className="px-2 py-2 flex flex-wrap gap-1 items-center justify-start py-1">
                            {notDrawnNumbers.length === 0 
                                ? 'No data' 
                                : notDrawnNumbers.map((el, ix) => (
                                    <span
                                        key={ix}
                                        className={`border border-4 border-heatmap-gray w-6 h-6 flex items-center justify-center 
                                            rounded-full text-xs font-semibold`}
                                    >
                                        {el}
                                    </span>
                                ))
                            }
                        </td>
                    </tr>
                </tbody>                        
            </table>    
        </div>
    )
}