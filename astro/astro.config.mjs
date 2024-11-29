// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://stefanotambellini.it",
  output: "static",
  integrations: [react(), tailwind({ applyBaseStyles: false, nesting: false })],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
  },
});
