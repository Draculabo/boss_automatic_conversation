import Config from '@/utils/Config';
import Conversation from '@/utils/Conversation';
import { useEffect, useRef, useState } from 'react';

function Automation() {
  const conversation = useRef<Conversation>();
  useEffect(() => {
    conversation.current = new Conversation();
  }, []);
  const togglePolling = () => {
    if (conversation.current) {
      conversation.current.polling.togglePolling();
      conversation.current.setting.config.automation = conversation.current.polling.status;
      conversation.current.setting.syncWriteData();
      conversation.current.polling.status && conversation.current.start();
    }
  };
  return (
    <button className="button" onClick={togglePolling}>
      {conversation.current?.polling.status ? '关闭自动轮询' : '开启自动轮询'}
    </button>
  );
}

export default Automation;
