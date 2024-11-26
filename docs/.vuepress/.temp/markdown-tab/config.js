import { CodeTabs } from "/data/data/com.termux/files/home/projects/wikirefactor/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/data/data/com.termux/files/home/projects/wikirefactor/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/data/data/com.termux/files/home/projects/wikirefactor/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
