import { EventHandler, FocusEventHandler, MouseEvent, MouseEventHandler, useState } from 'react';
import { dataName, dataNameType } from '../../config/constant';
import Config from '@/utils/Config';

interface ExceptionProps {
  type: dataNameType;
}
function TextRegion(props: ExceptionProps) {
  const { type } = props;
  const [value, setValue] = useState<string>();
  const save = (e: MouseEvent<HTMLButtonElement>): void => {
    const config = new Config();
    const values = e.currentTarget.value.split(',');
    if (type === 'target') {
      config.config.targetList = values;
    } else if (type === 'exclude') {
      config.config.excludeList = values;
    }
  };
  const input: FocusEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <h5>{type}:</h5>
      <textarea onInput={input} value={value}></textarea>
      <button onClick={save}>保存</button>
    </>
  );
}

export default TextRegion;
