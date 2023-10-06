/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const ELEMENTS = ["p", "circle", "li", "a"];

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
            colors: {
                "ruby-red": "#D31D1D",
                "dark-chocolate": "#3A2E2E",
                "light-pink": "#FFF3F2",
                "light-pink-transparent": "#fff3f280",
                lilac: "#E4DDFF",
                "ice-blue": "#E0F4FF",
                "tea-green": "#D1E9D4",
                volt: "#EFF32C"
            }
        }
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("children", "&>*");
            addVariant("children-not-last", "&>*:not(:last-child)");
            addVariant("not-last", "&:not(:last-child)");
            ELEMENTS.forEach((element) => {
                addVariant(`children-${element}`, `&>${element}`);
                addVariant(`children-${element}-not-last`, `&>${element}:not(:last-child)`);
                addVariant(`children-${element}-first`, `&>${element}:first-child`);
            });
        })
    ]
};
