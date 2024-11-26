import "/data/data/com.termux/files/home/projects/wikirefactor/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/data/data/com.termux/files/home/projects/wikirefactor/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/data/data/com.termux/files/home/projects/wikirefactor/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/data/data/com.termux/files/home/projects/wikirefactor/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/data/data/com.termux/files/home/projects/wikirefactor/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/data/data/com.termux/files/home/projects/wikirefactor/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
