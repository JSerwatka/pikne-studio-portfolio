import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://pikne.studio",
    integrations: [
        tailwind({
            applyBaseStyles: false
        }),
        solidJs(),
        sitemap()
    ]
});
