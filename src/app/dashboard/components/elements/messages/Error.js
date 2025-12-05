import { AlertCircle } from "lucide-react";

export default function Error({ message }) {
    return (
        <div className="max-w-md mx-auto my-6 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700 flex items-center space-x-3">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            <p className="text-sm font-medium">Error: {message}</p>
        </div>
    )
}