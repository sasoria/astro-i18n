import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  i18n: {
    defaultLocale: "en",
    locales: ["nb", "nn", "en"],
    routing: {
      prefixDefaultLocale: true
    }
  },
});