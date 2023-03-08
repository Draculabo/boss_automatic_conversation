import { sleep } from './sleep';

export class Polling {
  private timer?: number;
  constructor(private polling: boolean, private ms: number) {}
  togglePolling() {
    this.polling = !this.polling;
  }
  startPolling() {
    this.polling = true;
  }
  stopPolling() {
    this.polling = false;
  }
  get status() {
    return this.polling;
  }
  clear() {
    const fn = window.clearInterval;
    fn(this.timer);
  }
  start(callback: () => void) {
    const fn = window.setInterval;
    fn(() => {
      callback();
    }, this.ms);
  }
}
