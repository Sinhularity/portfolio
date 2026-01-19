import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    starlight({
      title: "Docs with Tailwind",
      customCss: ["./src/styles/global.css"],
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  site: "https://Sinhularity.github.io/portfolio",
});
