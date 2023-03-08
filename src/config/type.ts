export interface ConversationConfig {
  concurrentLimit: number;
  maxLimit: number;
  executeInterval: number;
  targetList: string[];
  excludeList: string[];
  automation: boolean;
  idleMap: {
    [key: string]: {
      status: boolean;
    };
  };
}
