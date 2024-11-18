/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sportshub.cbsistatic.com',
            },
        ],
    },
};

export default nextConfig;
