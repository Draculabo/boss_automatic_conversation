import { useBoolean } from '@/hooks/useBoolean';
import { createPortal } from 'react-dom';
import Setting from './Setting';

function SettingButton() {
  const [visible, { toggle }] = useBoolean();
  return (
    <>
      <button
        className="button"
        onClick={() => {
          toggle();
        }}>
        设置
      </button>
      {visible && createPortal(<Setting />, document.body)}
    </>
  );
}

export default SettingButton;
