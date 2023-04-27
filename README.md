<p align="center"> <a href="https://github.com/draculabo/boss_automatic_conversation/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="MIT License"> <a href="https://jq.qq.com/?_wv=1027&k=fCSfWf1O"> <a href="https://github.com/draculabo/boss_automatic_conversation/stargazers"><img src="https://img.shields.io/github/stars/draculabo/boss_automatic_conversation?style=flat" alt="Stars"></a> <a href="https://github.com/draculabo/boss_automatic_conversation/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/draculabo/boss_automatic_conversation"></a></p>
<h1 align="center">BOSS直聘自动沟通助手</h1>

### 安装方法

### 1. 点击 [Boss 直聘自动沟通助手](https://raw.githubusercontent.com/draculabo/boss_automatic_conversation/main/dist/boss_automatic_conversation.user.js) 从 github 安装脚本

### 2. 点击[Boss 直聘自动沟通助手](https://greasyfork.org/zh-CN/scripts/464791-boss%E7%9B%B4%E8%81%98%E8%87%AA%E5%8A%A8%E6%B2%9F%E9%80%9A%E5%8A%A9%E6%89%8B) 从 Greasyfork 安装脚本

---

## 使用方法

在 [Tampermonkey](https://www.tampermonkey.net) / [Violentmonkey](https://violentmonkey.github.io) 中启用脚本，登陆 BOSS 直聘后打开职位页面。

- 点击一键投递：只会投递本页面所有符合条件的岗位
- 点击自动轮询：一键投递且自动翻页

---

## 一些建议

- 初次使用时若出现看不到 UI 的情况，请等待一会或尝试刷新(`ctrl+F5`)页面。
- 部分设置更改后需要刷新页面才能生效。
- 设置在`LocalStorage`的`conversation_config`中

---

## 计划与更新

1. 增加 idleMap 的自动删除
   > 当链接超过一定时间（例如：30days），自动删除
2. 更新设置
   > config 增加 UI 项

---

## 关于反馈

- 反馈 bug 请点击[bug_report](https://github.com/draculabo/boss_automatic_conversation/issues/new?assignees=dong-jpg&labels=bug&template=bug_report.yaml)。

---

# 许可证

本项目以`MIT`许可证开源。

<a href="https://github.com/draculabo/boss_automatic_conversation/blob/main/LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/draculabo/boss_automatic_conversation?style=for-the-badge"></a>
