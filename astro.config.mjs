import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  outDir: './dist',
  output: 'server',
  adapter: vercel(),
 
  integrations: [tailwind(), mdx(), image(), react()]
});
