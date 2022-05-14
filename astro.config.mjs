import { defineConfig } from 'astro/config';

import { keyboard } from "scripts/keyboard.js";

import tailwind from "@astrojs/tailwind";



// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});