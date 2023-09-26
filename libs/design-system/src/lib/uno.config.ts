import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
} from 'unocss';


export default defineConfig({
  content: {
    pipeline: {
      include: [/.*\.(s?css|[jt]sx?)$/],
      exclude: []
    }
  },
  theme: {
    colors: {
      primary: '#D3610F',
      secondary: '#713129',
      dark: '#3E3E3E',
      light: '#e1e1e1',
      accent: '#E9DA52'
    },
  },
  shortcuts: [['container', 'px-4 sm:px-6 lg:px-40']],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives({
      enforce: 'pre',
    }),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
});
