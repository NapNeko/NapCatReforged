import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: '开始使用',
      prefix: 'start/',
      children: [
        {
          text: '序言',
          link: 'index',
        },
        {
          text: '准备工作',
          link: 'preparation',
        },
        {
          text: '安装 NapCatReforged',
          link: 'installation',
        },
        {
          text: '运行 NapCatReforged',
          link: 'usage',
        },
      ]
    }
  ],
});
