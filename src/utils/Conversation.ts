import Config from './Config';
import { Polling } from './Polling';
import { isNil } from './assistant';

export default class Conversation {
  polling = {} as Polling;
  pageNo: number = 1;
  setting = {} as Config;
  constructor() {
    this.init();
  }
  init() {
    this.setting = new Config();
    this.polling = new Polling(this.setting.config.automation, this.setting.config.executeInterval);
    this.polling.status && this.start();
  }
  executeIdleQueue() {
    if (this.setting.config.maxLimit <= 0) {
      this.polling.clear();
      return;
    }
    if (Object.values(this.setting.config.idleMap).filter((v) => !v.status).length === 0) {
      this.polling.status && this.navigateNextPage();
      this.polling.clear();
      return;
    }
    for (let i = 0; i < this.setting.config.concurrentLimit; i++) {
      const url = Object.entries(this.setting.config.idleMap)
        .filter((v) => !v[1].status)
        .pop();
      if (url) {
        this.setting.config.idleMap[url[0]].status = true;
        url && window.open(url[0]);
      }
    }
    this.setting.syncWriteData();
  }
  start() {
    this.polling.start(() => {
      this.setting.syncReadData();
      this.addJobTask();
      this.executeIdleQueue();
    });
  }

  addJobTask() {
    const list = document.querySelectorAll('.job-list-box>li a.job-card-left') as unknown as HTMLAnchorElement[];
    list.forEach((el) => {
      if (isNil(this.setting.config.idleMap[el.href])) {
        this.setting.config.idleMap[el.href] = {
          status: false,
        };
      }
    });
  }
  navigateNextPage() {
    let search = '';
    const hasSearchParam = location.search.length !== 0;
    const pageNo = this.pageNo;
    if (/page=[0-9]+/.test(location.search)) {
      search = location.search.replace(/(page=)[0-9]+/, `$1=${pageNo}`);
    } else {
      search = location.search + `${hasSearchParam ? '&' : '?'}page=${pageNo}`;
    }
    const url = `${location.origin}${location.pathname}${search}`;
    window.location.href = url;
  }
}
