import * as styled from './style';

import React, { useState, useRef, useEffect, useContext } from 'react';

import GlobalContext from 'context';
import { useClickAway } from 'hooks';

import Avatar from '/images/misc/avatar.jpg';

type ChatQNAProps = {
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
};

const Chatbot = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const clickAwayRef = useRef<HTMLDivElement>(null);
  const { chatBotState, setChatbotState } = useContext(GlobalContext);
  useClickAway(clickAwayRef, () => {
    setChatbotState('close');
    setCurrentQuestion(0);
  });

  const Delayed = ({ children }: { children: React.ReactNode }) => {
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
      // prevent memory leaks
      let mounted = true;
      const timeout = setTimeout(() => {
        if (mounted) {
          setIsShown(true);
          contentRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 2000);
      return () => {
        mounted = false;
        clearTimeout(timeout);
      };
    }, []);

    return isShown ? (
      children
    ) : (
      <styled.TypingBubble>
        <div className="typing">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </styled.TypingBubble>
    );
  };

  const ChatQNA: React.FC<ChatQNAProps> = ({
    currentQuestion,
    setCurrentQuestion,
  }) => {
    const question =
      currentQuestion === 1
        ? `I'm good, just wanna say hi.`
        : currentQuestion === 2
        ? `Fun facts about you?`
        : currentQuestion === 3
        ? `Other ways to contact you?`
        : currentQuestion === 4
        ? `I'd like to hire you!`
        : null;
    const answer =
      currentQuestion === 1 ? (
        <Delayed>
          <div className="agent" ref={contentRef}>
            <p>Well hi there!</p>
            <br />
            <p>Thanks for saying hi 😁</p>
            <br />
            <p> I hope you've enjoyed browsing my website!</p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : currentQuestion === 2 ? (
        <Delayed>
          <div className="agent" ref={contentRef}>
            <p>
              1. I used to be a social media content creator✍️ on WeChat for 4
              years. And there was one article that I wrote got more than 15
              million views in less than 15 hours.
            </p>
            <br />
            <p>
              2. I want to become a competitive bodybuilder💪 in my 30's, and a
              jacked old man in my 80's 😈.
            </p>
            <br />
            <p>
              3. My aspiration is to be a Digital Nomad, working from any corner
              of the globe 🌍
            </p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : currentQuestion === 3 ? (
        <Delayed>
          <div className="agent mw-93" ref={contentRef}>
            <p>📧 Here is my email:</p>
            <br />
            <p>
              <a href="mailto:xiaxi.li.syd@gmail.com">xiaxi.li.syd@gmail.com</a>
            </p>
            <br />
            <p>I'm always open to job opportunities and new connections🤝!</p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : currentQuestion === 4 ? (
        <Delayed>
          <div className="agent" ref={contentRef}>
            <p>That's great!</p>
            <p className="mt-sm">I'm so Excited🕺!</p>
            <p>
              Have a look at my
              <a
                href="https://drive.google.com/file/d/1Neh66oJyiG87217mAF55pRB-Lr48LvYK/view?usp=sharing"
                className="link-btn"
              >
                resume💾
              </a>
              and let's
              <a href="mailto:xiaxi.li.syd@gmail.com" className="link-btn">
                chat💌
              </a>
              further!
            </p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : (
        ''
      );

    const onQuestionBtnClick = (questionNum: number) => {
      setCurrentQuestion(questionNum);
    };

    return (
      <>
        <styled.ChatAnswer $currentQuestion={currentQuestion}>
          <div tabIndex={-1} className="user">
            {question}
          </div>
          {answer}
        </styled.ChatAnswer>
        <styled.ChatQuestion $currentQuestion={currentQuestion}>
          <button
            onClick={() => {
              onQuestionBtnClick(1);
            }}
            className="question-btn"
          >
            👋 I'm good, just wanna say hi.
          </button>
          <button
            onClick={() => {
              onQuestionBtnClick(2);
            }}
            className="question-btn"
          >
            🎉 Fun facts about you?
          </button>
          <button
            onClick={() => {
              onQuestionBtnClick(3);
            }}
            className="question-btn"
          >
            💬 Other ways to contact you?
          </button>
          <button
            onClick={() => {
              onQuestionBtnClick(4);
            }}
            className="question-btn"
          >
            💼 I'd like to hire you!
          </button>
        </styled.ChatQuestion>
      </>
    );
  };
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const onCloseBtnClick = () => {
    setChatbotState('close');
    setCurrentQuestion(0);
  };

  return (
    <styled.Chatbot $chatBotState={chatBotState} ref={clickAwayRef}>
      <styled.ChatHeader>
        <img src={Avatar} alt="Pic of Adrian" className="avatar" />
        <div className="desc">
          <span className="name">Adrian Bot</span>
          <span className="question">Ask me a question!</span>
        </div>

        <div className="align-left">
          <button className="close-btn" onClick={onCloseBtnClick}>
            <styled.CloseIcon />
          </button>
        </div>
      </styled.ChatHeader>

      <styled.ChatContent>
        <div className="agent">Hello! My name is Adrian Bot 🤖</div>

        <div className="agent">
          I know as much as Adrian. Maybe even a little bit more! 😉
        </div>

        <div className="agent">How can I help you today?</div>

        <ChatQNA
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      </styled.ChatContent>
    </styled.Chatbot>
  );
};

export default Chatbot;
