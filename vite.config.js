import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main/index.html"),
        fallingSand: resolve(__dirname, "src/falling-sand-src/index.html"),
        sortingVis: resolve(__dirname, "src/sorting-vis-src/index.html"),
      },
    },
  },
});
