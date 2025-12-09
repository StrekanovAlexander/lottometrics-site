import { useDashboard } from "@/context/DashboardContext";

export default function GapsBar() {
    const { showZero, setShowZero, sorting, setSorting } = useDashboard();
    const turnShowZero = (val) => setShowZero(val === "true");
    
    return (
        <div className="inline-block mb-6">
            <div class="flex flex-col md:flex-row gap-2 md:gap-6">
                <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 px-3">
                    <div className="w-[50px] text-sm font-semibold">
                        Filter
                    </div>
                    <label class="inline-flex items-center gap-2 px-4 py-2">
                        <input
                            type="radio"
                            value="false"
                            checked={!showZero}
                            onChange={(ev) => turnShowZero(ev.target.value)}
                            class="h-4 w-4 accent-graphite rounded-full border-gray-300"
                        />
                        <span class="text-sm text-gray-800">Non‑zero</span>
                    </label>
                    <label class="inline-flex items-center gap-2 px-4 py-2">
                        <input
                            type="radio"
                            value="true"
                            checked={showZero}
                            onChange={(ev) => turnShowZero(ev.target.value)}
                            class="h-4 w-4 accent-graphite rounded-full border-gray-300"
                        />
                        <span class="text-sm text-gray-800">All</span>
                    </label>
                </div>
                <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 px-3">    
                    <div className="w-[50px] text-sm font-semibold">
                        Sorting
                    </div>
                    <label class="inline-flex items-center gap-2 px-4 py-2">
                        <input
                            type="radio"
                            value="desc"
                            checked={sorting === "desc"}
                            onChange={(e) => setSorting(e.target.value)}
                            class="h-4 w-4 accent-graphite rounded-full border-gray-300"
                        />
                        <span class="text-sm text-gray-800">Down</span>
                    </label>
                    <label class="inline-flex items-center gap-2 px-4 py-2">
                        <input
                            type="radio"
                            value="asc"
                            checked={sorting === "asc"}
                            onChange={(ev) => setSorting(ev.target.value)}
                            class="h-4 w-4 accent-graphite rounded-full border-gray-300"
                        />
                        <span class="text-sm text-gray-800">Up</span>
                    </label>
                </div>    
            </div>
        </div>
    )
}