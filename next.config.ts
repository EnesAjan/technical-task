import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/product-list",
                permanent: true,
            },
        ];
    },
    images: {
        // domains: ['cdn.dummyjson.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.dummyjson.com",
                port: "",
                pathname: "/products/images/**",
            },
        ],
    },
};

export default nextConfig;
