export const isNil = (input: unknown): input is undefined | null => {
  return input == null;
};

export const composeArrayToRegExp = (list: string[]) => {
  const regexStr = list.reduce((prev, cur, index) => {
    prev += cur;
    if (index < list.length - 1) {
      prev += '|';
    }
    return prev;
  }, '');
  return new RegExp(regexStr);
};
