/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        colors: {
            "ruby-red": "#D31D1D",
            "dark-chocolate": "#3A2E2E",
            "light-pink": "#FFF3F2",
            lilac: "#E4DDFF",
            "ice-blue": "#E0F4FF",
            "tea-green": "#D1E9D4",
            volt: "#EFF32C"
        },
        fontFamily: {
            metropolis: ["Metropolis", "Arial", "sans-serif"],
            olympic: ["OlympicLight", "Palatino", "serif"],
            alexang: ["Palatino", "serif"]
        },
        extend: {
            backgroundImage: ({ theme }) => ({
                "gradient-brand": `linear-gradient(to bottom, 
                    transparent, 
                    ${theme("colors.volt")}, 
                    ${theme("colors.tea-green")}, 
                    ${theme("colors.ice-blue")}, 
                    ${theme("colors.lilac")}, 
                    ${theme("colors.ruby-red")}
                )`
            })
        }
    },
    plugins: []
};
