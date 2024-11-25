import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },
    images: {
        remotePatterns: [
            {
                hostname: 'image.tmdb.org'
            }
        ],
    },

};

export default nextConfig;
