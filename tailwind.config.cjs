/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        colors: {
            "text-primary": "#D31D1D",
            "text-secondary": "#3A2E2E",
            "text-tertiary": "#FFF3F2",
            "background-primary": "#FFF3F2",
            "background-lilac": "#E4DDFF",
            "background-ice-blue": "#E0F4FF",
            "background-tea-green": "#D1E9D4",
            "background-volt": "#EFF32C"
        },
        fontFamily: {
            metropolis: ["Metropolis", "Arial", "sans-serif"],
            olympic: ["OlympicLight", "Palatino", "serif"],
            alexang: ["Palatino", "serif"]
        },
        extend: {}
    },
    plugins: []
};
