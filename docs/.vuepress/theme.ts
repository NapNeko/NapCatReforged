import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://napneko.github.io",
  author: {
    name: "Team NapNeko",
    url: "https://github.com/NapNeko",
  },
  iconAssets: "fontawesome-with-brands",
  logo: "https://avatars.githubusercontent.com/u/165024194",
  repo: "https://github.com/NapNeko/NapCatReforged",
  docsDir: "docs",

  navbar,
  sidebar,
  footer: "Licensed under <a href=\"\">GPL v3</a>",
  displayFooter: true,

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    components: {
      components: ["Badge", "VPCard"],
    },
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
  },
});
