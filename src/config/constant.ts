import { ConversationConfig } from './type';

export const localStorageConfigKey = 'conversation_config';
export const dataName = {
  target: 'target',
  exclude: 'exclude',
} as const;
export type dataNameType = (typeof dataName)[keyof typeof dataName];
export const initialConfig: ConversationConfig = {
  concurrentLimit: 2,
  maxLimit: 30,
  executeInterval: 10000,
  targetList: ['[Rr]eact'],
  excludeList: ['985', '211', '硕士'],
  automation: false,
  idleMap: {},
};
