import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { zh } from './zh'

export default defineConfig({
  base: '/rsshub/',
  ...shared,
  locales: {
    root: { label: 'English', lang: 'en' },
    zh: { label: '简体中文', ...zh },
  }
})