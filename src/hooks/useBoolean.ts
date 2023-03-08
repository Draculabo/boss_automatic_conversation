import { useState } from 'react';
interface Action {
  setFalse: () => void;
  setTrue: () => void;
  toggle: () => void;
  set: (value: boolean) => void;
}
export const useBoolean = (initialValue = false): [boolean, Action] => {
  const [visible, setVisible] = useState(initialValue);
  const action: Action = {
    setFalse() {
      setVisible(false);
    },
    setTrue() {
      setVisible(true);
    },
    toggle() {
      setVisible(!visible);
    },
    set(value: boolean) {
      setVisible(value);
    },
  };
  return [visible, action];
};
