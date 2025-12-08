export default function GapsBar({filterZero, setFilterZero, sort, setSort}) {
    return (
        <div className="inline-block mb-6 p-3 bg-white rounded-lg shadow-sm border border-gray-200">
            <div class="flex gap-3">
                <div className="flex items-center">
                    Filter
                </div>
                <label class="inline-flex items-center gap-2 px-4 py-2">
                    <input
                        type="radio"
                        value="nonzero"
                        checked={filterZero === "nonzero"}
                        onChange={(ev) => setFilterZero(ev.target.value)}
                        class="h-4 w-4 accent-graphite rounded-full border-gray-300"
                    />
                    <span class="text-sm text-gray-800">Non‑zero</span>
                </label>
                <label class="inline-flex items-center gap-2 px-4 py-2">
                    <input
                        type="radio"
                        value="all"
                        checked={filterZero === "all"}
                        onChange={(e) => setFilterZero(e.target.value)}
                        class="h-4 w-4 accent-graphite rounded-full border-gray-300"
                    />
                    <span class="text-sm text-gray-800">All</span>
                </label>
                <div className="flex items-center border-l pl-5">
                    Sorting
                </div>
                <label class="inline-flex items-center gap-2 px-4 py-2">
                    <input
                        type="radio"
                        value="down"
                        checked={sort === "down"}
                        onChange={(e) => setSort(e.target.value)}
                        class="h-4 w-4 accent-graphite rounded-full border-gray-300"
                    />
                    <span class="text-sm text-gray-800">Down</span>
                </label>
                <label class="inline-flex items-center gap-2 px-4 py-2">
                    <input
                        type="radio"
                        value="up"
                        checked={sort === "up"}
                        onChange={(ev) => setSort(ev.target.value)}
                        class="h-4 w-4 accent-graphite rounded-full border-gray-300"
                    />
                    <span class="text-sm text-gray-800">Up</span>
                </label>
            </div>
        </div>
    )
}