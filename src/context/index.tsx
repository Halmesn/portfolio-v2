import React, { createContext } from 'react';

import { useChatbot, useViewport, useDarkMode, useGrid } from 'hooks';

import { OpenCloseState } from 'types';

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {
  chatBotState: OpenCloseState;
  setChatbotState: (state: OpenCloseState) => void;
  gridState: OpenCloseState;
  setGridState: (state: OpenCloseState) => void;
  width: number;
  theme: 'light' | 'dark';
  themeToggler: () => void;
};

const GlobalContext = createContext<GlobalContextType>({
  chatBotState: 'close',
  gridState: 'close',
  setChatbotState: () => {},
  setGridState: () => {},
  width: 0,
  theme: 'light',
  themeToggler: () => {},
});

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [chatBotState, setChatbotState] = useChatbot();
  const [gridState, setGridState] = useGrid();

  const width = useViewport();
  const [theme, themeToggler] = useDarkMode();

  return (
    <GlobalContext.Provider
      value={{
        chatBotState,
        setChatbotState,
        width,
        theme,
        themeToggler,
        gridState,
        setGridState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
