import Link from "next/link";

export default function Breadcrumbs({ items }) {
    return (
        <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap text-sm text-graphite-dark">
            {items.map((el, ix) => (
                <li key={ix} className="flex items-center">
                {el.href ? (
                    <>
                        <Link href={el.href} className="hover:text-gray-900 transition">
                            {el.label}
                        </Link>
                        <span className="mx-2 text-gray-400">/</span>
                    </>
                    ) : (<span className="flex items-center text-graphite font-semibold">{el.label}</span>)
                }
                </li>
            ))}
            </ol>
        </nav>
    );
}
