import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/NapCatReforged/",

  lang: "zh-CN",
  title: "NapCatReforged",
  description: "NapCatReforged 使用文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
