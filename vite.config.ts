/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            manifest: {
                name: "Deny.Biz.Id Terminal Portfolio",
                short_name: "Deny Terminal",
                description: "Terminal-style portfolio website for Deny",
                theme_color: "#1d2a35",
                background_color: "#1d2a35",
                display: "standalone",
                icons: [
                    {
                        src: "/android-chrome-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/test/setup.ts",
    },
});
