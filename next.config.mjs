/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/lottery/6-aus-49',
                destination: '/lottery/lotto6aus49',
                permanent: true,
            },
            {
                source: '/lottery/6-aus-49/:path*',
                destination: '/lottery/lotto6aus49/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
