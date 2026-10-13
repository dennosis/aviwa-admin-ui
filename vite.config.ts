import react from "@vitejs/plugin-react"; // Se usar SWC, instale '@vitejs/plugin-react-swc'
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
    host: true,
    watch: {
      ignored: ["**/coverage/**"],
    },
  },

  plugins: [tsconfigPaths(), react()],

  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 3000,

    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },

  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },

    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        loadPaths: ["./src"],
      },
    },
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
});
