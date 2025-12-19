import NumbersCard from "../../../elements/cards/NumbersCard";

export default function FrequencyCategoriesPart({calculatedData, filteredData}) {
    const missedNumbers = filteredData.filter(el => el.hits_count === 0).map(el => el.draw_number);
    const hotNumbers = calculatedData.filter(el => el.category === 'hot').map(el => el.draw_number);
    const coldNumbers = calculatedData.filter(el => el.category === 'cold').map(el => el.draw_number);
    const middleNumbers = calculatedData.filter(el => el.category === 'middle').map(el => el.draw_number);

    return (
        <div className="bg-gray-50 border border-gray-300 rounded-md p-4 shadow-sm">
            <h2 className="text-sm text-gray-700 mb-4">
                Number Frequency Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <NumbersCard title={`Hot Numbers`} numbers={hotNumbers} category={`hot`} />
                <NumbersCard title={`Middle Numbers`} numbers={middleNumbers} category={`middle`} />
                <NumbersCard title={`Cold Numbers`} numbers={coldNumbers} category={`cold`} />
                <NumbersCard title={`Numbers Not Drawn`} numbers={missedNumbers} category={`missed`} />
            </div>
        </div>
    )
}