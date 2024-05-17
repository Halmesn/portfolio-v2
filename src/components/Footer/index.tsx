import * as styled from './style';

import { useContext } from 'react';

import GlobalContext from 'context';

import Chatbot from 'components/Chatbot';

const Footer = () => {
  const { gridState, setGridState, theme, chatBotState, setChatbotState } =
    useContext(GlobalContext);

  return (
    <styled.Footer $gridState={gridState}>
      <styled.GridButton onClick={() => setGridState('open')}>
        + explore
      </styled.GridButton>
      <styled.ChatButton
        onClick={() => setChatbotState('open')}
        $chatBotState={chatBotState}
      >
        <styled.ChatBotIcon theme={theme} />
      </styled.ChatButton>
      <Chatbot />
    </styled.Footer>
  );
};

export default Footer;
