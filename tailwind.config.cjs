/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            metropolis: ["Metropolis", "Arial", "sans-serif"],
            olympic: ["OlympicLight", "Palatino", "serif"],
            alexang: ["AlexangDisplay", "Palatino", "serif"]
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
            }),
            fontSize: {
                "hero-max": "26.25rem",
                "hero_2-max": "18.75rem",
                "header_1-max": "6.25rem",
                "header_2-max": "3.75rem",
                "header_3-max": "4.375rem",
                "header_4-max": "1.75rem",
                "paragraph_normal-max": "1.75rem",
                "paragraph_quote-max": "1.75rem"
            },
            colors: {
                "ruby-red": "#D31D1D",
                "dark-chocolate": "#3A2E2E",
                "light-pink": "#FFF3F2",
                lilac: "#E4DDFF",
                "ice-blue": "#E0F4FF",
                "tea-green": "#D1E9D4",
                volt: "#EFF32C"
            }
        }
    },
    plugins: []
};
