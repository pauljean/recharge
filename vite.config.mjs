import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import fs from "fs";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

// Clean dist folder before build
if (fs.existsSync(path.resolve("dist"))) {
  fs.rmSync(path.resolve("dist"), { recursive: true, force: true });
}

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
    assetsInlineLimit: 0,
  },
  plugins: [
    injectHTML(),
    viteStaticCopy({
      targets: [
        {
          src: "assets/**/*", // Only copy the assets folder
          dest: "assets", // Place in the dist/assets folder
        },
      ],
    }),
  ],
});
