import { useState } from 'react';

import { OpenCloseState } from 'types';

export const useGrid = (): [
  OpenCloseState,
  (state: OpenCloseState) => void,
] => {
  const [state, setState] = useState<OpenCloseState>('close');

  const setGridState = (newState: OpenCloseState) => {
    setState(newState);
  };

  return [state, setGridState];
};
