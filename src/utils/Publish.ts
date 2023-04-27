import { CheckPage } from './CheckPage';
import Config from './Config';
import { isNil, composeArrayToRegExp } from './assistant';

export class Publish {
  private mountedTimer?: number;
  private setting = {} as Config;
  constructor() {
    this.start();
    this.setting = new Config();
  }
  checkCondition() {
    const target = document.querySelector('.job-sec-text');
    if (isNil(target)) {
      return false;
    }
    const result = composeArrayToRegExp(this.setting.config.targetList).test(target.textContent!);
    const exclude = composeArrayToRegExp(this.setting.config.excludeList).test(target.textContent!);
    return result && !exclude;
  }
  publish() {
    if (this.setting.config.maxLimit <= 0) {
      return;
    }
    const link = document.querySelector('.btn-container>.btn-startchat');
    if (link) {
      // @ts-ignore
      link.click();
      this.setting.config.automation && this.setting.config.maxLimit--;
      this.setting.syncWriteData();
    } else {
      console.log('没有找到沟通按钮');
      window.close();
    }
  }
  start() {
    this.mountedTimer = window.setInterval(() => {
      if (!this.checkCondition()) {
        window.close();
        clearInterval(this.mountedTimer);
        return;
      }
      const conversationBtn = document.querySelector('.btn-container>.btn-startchat');
      const leftTitleEl = document.querySelector('.left-title');
      const dialogEl = document.querySelector('.dialog-container');
      if (!CheckPage.isDetail()) {
        clearInterval(this.mountedTimer);
        window.close();
        return;
      }
      this.publish();
      if (dialogEl || leftTitleEl || conversationBtn!.textContent === '继续沟通') {
        clearInterval(this.mountedTimer);
        window.close();
      }
    }, 3000);
  }
}
