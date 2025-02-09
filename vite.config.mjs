import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import fs from "fs";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

// Get all .html files in the root directory
const htmlFiles = fs
  .readdirSync(path.resolve())
  .filter((file) => file.endsWith(".html"))
  .map((file) => path.resolve(file));

export default defineConfig({
  build: {
    rollupOptions: {
      input: htmlFiles,
    },
  },
  plugins: [
    injectHTML(),
    viteStaticCopy({
      targets: [
        {
          src: "assets/**/*", // Copy all files and subfolders in assets
          dest: "assets", // Place them in the dist/assets folder
        },
        {
          src: ["*", "!dist", "!dist/**/*"], // Exclude the dist folder
          dest: "", // Place root files in the dist folder
        },
      ],
    }),
  ],
});
