import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                card: "var(--card)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
                mono: ["var(--font-geist-mono)", "Roboto Mono", "monospace"],
            },
        },
    },
    plugins: [],
};
export default config;
