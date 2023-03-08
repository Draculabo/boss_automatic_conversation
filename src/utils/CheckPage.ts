import { composeArrayToRegExp, isNil } from './assistant';

export class CheckPage {
  public static isDetail() {
    const conversationBtn = document.querySelector('.btn-container>.btn-startchat');
    return !isNil(conversationBtn) || /job_detail/.test(location.pathname);
  }
  public static isList() {
    const reg = composeArrayToRegExp(['geek/recommend', 'geek/job']);
    return reg.test(location.pathname);
  }
}
