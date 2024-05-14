import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), icon()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    prefixDefaultLocale: true,
  },
});
