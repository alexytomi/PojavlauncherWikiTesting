import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { defaultTheme } from '@vuepress/theme-default'
import type { Theme } from 'vuepress/core'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export const childTheme = (options: DefaultThemeOptions): Theme => ({
  name: 'vuepress-theme-child',
  extends: defaultTheme(options),

  // override layouts in child theme's client config file
  // notice that you would build ts to js before publishing to npm,
  // so this should be the path to the js file
  clientConfigFile: path.resolve(__dirname, './client.js'),

  // override component alias
  alias: {
    '@theme/HomeFooter.vue': path.resolve(
      __dirname,
      './components/MyHomeFooter.vue',
    ),
  },
})
