import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'WIP Pojav Refactor',
  description: 'heehee',
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/images/logo.png',
    sidebar: [
      {
        text: 'Getting Started', // Subcategory for starting off
        prefix: 'Wiki/Getting-Started',
        collapsable: false, // Don't allow collapsing
        sidebarDepth: 2,
          children: [
          'INSTALL', // Installing PojavLauncher
          'BUILD-FROM-SOURCE', // Building PojavLauncher from source
          'SIGN-IN', // Signing in
          'INSTALL-MC', // Downloading Minecraft
          'CUSTOM-CONTROLS', // Customizing the on-screen controls
          'DISCORD', // Official PojavLauncher Discord server
          ]
      },
      {
        text: 'Frequently Asked Questions',
        prefix: 'Wiki/FAQ',
        collapsible: true,
        sidebarDepth: 1,

        children:[
          'RPWORLDNOTSHOWINGUP',
          'CRASHES',
          'MODCONFLICT',
          'JAVAVERSION',
          'CANTLOGIN',
          { //Android Specific
            text: 'Android Specific',
            prefix: 'Android',
          	sidebarDepth: 1,
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
              text: 'iOS-specific', // Subcategory for iOS FAQ
							collapsible: true,
	            prefix: 'iOS',
              sidebarDepth: 1,
							children: [
								'JIT', // iOS and "JIT"
								'APPSTORE', // Will PojavLauncher ever come to App Store for iOS?
							]
          }

        ],
      },
    ]// End of children
  })
})
