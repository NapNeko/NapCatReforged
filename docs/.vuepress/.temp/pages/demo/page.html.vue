<template><div><p><code v-pre>more</code> 注释之前的内容被视为文章摘要。</p>
<!-- more -->
<h2 id="页面标题" tabindex="-1"><a class="header-anchor" href="#页面标题"><span>页面标题</span></a></h2>
<p>The first H1 title in Markdown will be regarded as page title.</p>
<p>Markdown 中的第一个 H1 标题会被视为页面标题。</p>
<p>你可以在 Markdown 的 Frontmatter 中设置页面标题。</p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> 页面标题</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面信息" tabindex="-1"><a class="header-anchor" href="#页面信息"><span>页面信息</span></a></h2>
<p>你可以在 Markdown 的 Frontmatter 中设置页面信息。</p>
<ul>
<li>作者设置为 Ms.Hope。</li>
<li>写作日期为 2020 年 1 月 1 日</li>
<li>分类为 “使用指南”</li>
<li>标签为 “页面配置” 和 “使用指南”</li>
</ul>
<h2 id="页面内容" tabindex="-1"><a class="header-anchor" href="#页面内容"><span>页面内容</span></a></h2>
<p>你可以自由在这里书写你的 Markdown。</p>
<div class="hint-container tip">
<p class="hint-container-title">图片引入</p>
<ul>
<li>你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。</li>
<li>对于 <code v-pre>.vuepress/public</code> 文件夹的图片，请使用绝对链接 <code v-pre>/</code> 进行引用。</li>
</ul>
</div>
<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2>
<p>每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：</p>
<p>{{ 1 + 1 }}</p>
<!-- markdownlint-disable MD033 -->
<ul>
  <li v-for="i in 3">{{ i }}</li>
</ul>
<!-- markdownlint-enable MD033 -->
<p>你也可以创建并引入你自己的组件。</p>
<MyComponent /><hr>
<p>主题包含一些有用的组件。这里是一些例子:</p>
<ul>
<li>
<p>文字结尾应该有深蓝色的 徽章文字 徽章。 <Badge text="徽章文字" color="#242378" /></p>
</li>
<li>
<p>一个卡片:</p>
<VPCard v-bind='{"title":"Mr.Hope","desc":"Where there is light, there is hope","logo":"https://mister-hope.com/logo.svg","link":"https://mister-hope.com","background":"rgba(253, 230, 138, 0.15)"}' /></li>
</ul>
</div></template>


<script setup>
import { defineComponent, h, ref } from 'vue';

const MyComponent = defineComponent({
  setup() {
    const input = ref('Hello world!');
    const onInput = (e) => {
      input.value = e.target.value;
    };

    return () => [
      h('p', [
        h('span','输入: '),
        h('input', {
          value: input.value,
          onInput,
        }),
      ]),
      h('p', [h('span','输出: '), input.value]),
    ];
  },
});
</script>