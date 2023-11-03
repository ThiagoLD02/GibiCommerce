import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.publickey": JSON.stringify(env.publickey),
      "process.env.privatekey": JSON.stringify(env.privatekey),
    },
    plugins: [react()],
  };
});
