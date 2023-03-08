import Conversation from '@/utils/Conversation';
function MultiplePublishButton() {
  const publish = () => {
    new Conversation().start();
  };
  return (
    <button className="button" onClick={publish}>
      一键投递
    </button>
  );
}

export default MultiplePublishButton;
