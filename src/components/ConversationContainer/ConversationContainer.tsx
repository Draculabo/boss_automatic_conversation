import { CheckPage } from '@/utils/CheckPage';
import MultiplePublishButton from '../MultiplePublishButton/MultiplePublishButton';
import Automation from '../Automation/Automation';
import SettingButton from '../Setting/SettingButton';
function ConversationContainer() {
  if (!CheckPage.isList()) {
    return <></>;
  }
  return (
    <div className="boss-container boss-conversation-container">
      <MultiplePublishButton />
      <Automation />
      <SettingButton />
    </div>
  );
}

export default ConversationContainer;
