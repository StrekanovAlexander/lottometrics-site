import Link from "next/link";

export default function Breadcrumbs({ items }) {
    return (
    <nav aria-label="Breadcrumb" className="mb-10">
        <ol className="flex flex-wrap text-sm text-gray-600">
        {items.map((item, index) => (
            <li key={index} className="flex items-center">
            {item.href ? (
                <Link href={item.href} className="hover:text-gray-900">
                    {item.label}
                </Link>
                ) : (
                <span className="font-semibold text-gray-900">{item.label}</span>
                )}
                    {index < items.length - 1 && (
                    <span className="mx-2 text-gray-400">/</span>
                )}
            </li>
        ))}
        </ol>
    </nav>
    );
}
