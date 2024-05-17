import { useState } from 'react';

import { OpenCloseState } from 'types';

export const useChatbot = (): [
  OpenCloseState,
  (state: OpenCloseState) => void,
] => {
  const [state, setState] = useState<OpenCloseState>('close');

  const setChatbotState = (newState: OpenCloseState) => {
    setState(newState);
  };

  return [state, setChatbotState];
};
