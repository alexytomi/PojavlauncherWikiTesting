import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'en-US',
  title: 'WIP Pojav Refactor',
  description: 'heehee',
  bundler: viteBundler(),
  plugins: [
    searchPlugin({
      // options
    }),
  ],
  theme: defaultTheme({
    logo: '/images/logo.png',
    footer: 'footer',
    license: 'GPLv3',
    copyright: 'Copyright © 2024, PojavLauncherTeam',
    navbar: [
      {
        text: 'Getting Started',
        prefix: 'Wiki/Getting-Started',
        children: [{
          text: 'Getting Started',
          children: [
            'INSTALL',
            'BUILD-FROM-SOURCE',
            'SIGN-IN',
            'INSTALL-MC',
            'CUSTOM-CONTROLS',
            'DISCORD',
            ]
        }],
      },
      {
        text: 'FAQ', // I would call this Frequently Asked Questions but it looks weird on mobile
        prefix: 'Wiki/FAQ',
        children:[
          {
            text: 'General',
            sidebarDepth: 2, // This option doesn't even do anything because we use markdown-it instead of actual html
            children: [
              'RPWORLDNOTSHOWINGUP',
              'CRASHES',
              'MODCONFLICT',
              'JAVAVERSION',
              'CANTLOGIN',

            ]
          },
          { //Android Specific
            text: 'Android Specific',
            prefix: 'Android',
            children: [
								'PARSINGERROR', // "Error while parsing the package" error fix.
								'REFUSALOFINSTALL', // "App not installed" error fix. (very uncommon)
								'CANTFINDLOG', // Can't find the log file. (non-root)
								'CANTFINDMINECRAFT', // Can't find .minecraft (non-root)
								'ZINKNOTWORKING', // Zink doesn't work.
								'MODCRASHING', // Installing any mod results in a crash.
								'MODNOTSHOWINGUP', // My mods don't show up in-game.
								'JAVARUNTIMES', // Installing Java runtimes manually.
								'JARCRASHED', // Crash when executing a jar.
								'32BIT', // Platform and performance limitations. (32bit)
								'FFMPEG', // Setting up FFMPEG, for Replay Mod.
								'SHADERS', // Look what we got here.
								'RENDERERS', // I have no idea what they do and why PojavLauncher needs it.
							],
          },
          {//iOS Specific
              text: 'iOS-specific',
	            prefix: 'iOS',
              sidebarDepth: 2, // This option doesn't even do anything because we use markdown-it instead of actual html
							children: [
								'JIT',
								'APPSTORE',
							]
          }

        ],
      },
      {
        text: 'Contribute to the Wiki!',
        link: 'https://github.com/PojavLauncherTeam/PojavLauncherTeam.github.io/',
      }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        prefix: 'Wiki/Getting-Started',
        collapsible: true,
        sidebarDepth: 2, // This option doesn't even do anything because we use markdown-it instead of actual html
          children: [
          'INSTALL',
          'BUILD-FROM-SOURCE',
          'SIGN-IN',
          'INSTALL-MC',
          'CUSTOM-CONTROLS',
          'DISCORD',
          ]
      },
      {
        text: 'Frequently Asked Questions',
        prefix: 'Wiki/FAQ',
        collapsible: true,
        sidebarDepth: 2, // This option doesn't even do anything because we use markdown-it instead of actual html

        children:[
          'RPWORLDNOTSHOWINGUP',
          'CRASHES',
          'MODCONFLICT',
          'JAVAVERSION',
          'CANTLOGIN',
          { //Android Specific
            text: 'Android Specific',
            prefix: 'Android',
            sidebarDepth: 2, // This option doesn't even do anything because we use markdown-it instead of actual html
            collapsible: true,
            children: [
								'PARSINGERROR', // "Error while parsing the package" error fix.
								'REFUSALOFINSTALL', // "App not installed" error fix. (very uncommon)
								'CANTFINDLOG', // Can't find the log file. (non-root)
								'CANTFINDMINECRAFT', // Can't find .minecraft (non-root)
								'ZINKNOTWORKING', // Zink doesn't work.
								'MODCRASHING', // Installing any mod results in a crash.
								'MODNOTSHOWINGUP', // My mods don't show up in-game.
								'JAVARUNTIMES', // Installing Java runtimes manually.
								'JARCRASHED', // Crash when executing a jar.
								'32BIT', // Platform and performance limitations. (32bit)
								'FFMPEG', // Setting up FFMPEG, for Replay Mod.
								'SHADERS', // Look what we got here.
								'RENDERERS', // I have no idea what they do and why PojavLauncher needs it.
							],
          },
          {//iOS Specific
              text: 'iOS-specific',
							collapsible: true,
	            prefix: 'iOS',
              sidebarDepth: 2, // This option doesn't even do anything because we use markdown-it instead of actual html
							children: [
								'JIT',
								'APPSTORE',
							]
          }

        ],
      },
    ]// End of children
  })
})
