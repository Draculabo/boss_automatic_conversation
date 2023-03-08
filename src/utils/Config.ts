import { localStorageConfigKey, initialConfig } from '@/config/constant';
import { ConversationConfig } from '@/config/type';
import { isNil } from './assistant';

export default class Config {
  config = {} as ConversationConfig;
  constructor() {
    this.syncReadData();
  }
  syncReadData() {
    const dataStr = localStorage.getItem(localStorageConfigKey);
    if (isNil(dataStr)) {
      this.config = initialConfig;
      return;
    }
    try {
      this.config = JSON.parse(dataStr);
    } catch (error) {
      console.error(error);
    }
  }
  syncWriteData() {
    localStorage.setItem(localStorageConfigKey, JSON.stringify(this.config));
  }
}
