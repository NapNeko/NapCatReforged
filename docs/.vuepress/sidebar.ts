import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: '开始使用',
      prefix: 'start/',
      icon: 'lightbulb',
      children: [
        {
          text: '序言',
          icon: 'face-smile',
          link: 'index',
        },
        {
          text: '准备工作',
          icon: 'list',
          link: 'preparation',
        },
        {
          text: '安装 NapCatReforged',
          icon: 'download',
          link: 'installation',
        },
        {
          text: '运行 NapCatReforged',
          icon: 'floppy-disk',
          link: 'usage',
        },
      ]
    },
    {
      text: '配置文件',
      prefix: 'config/',
      icon: 'file',
      link: 'config/'
    }
  ],
});
