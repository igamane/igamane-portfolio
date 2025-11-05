import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Skip ESLint and TS errors during production builds
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default withSentryConfig(
    nextConfig,
    {
        // sentry-webpack-plugin options
        silent: true,
        org: 'javascript-mastery',
        project: 'javascript-nextjs',
    },
    {
        // Sentry Next.js SDK options
        widenClientFileUpload: true,
        transpileClientSDK: true,
        // tunnelRoute: "/monitoring",
        hideSourceMaps: true,
        disableLogger: true,
        automaticVercelMonitors: true,
    }
);
