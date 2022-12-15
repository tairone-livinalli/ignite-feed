import React, { useEffect, useRef } from 'react';
import { IoSend } from 'react-icons/io5';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  min-height: 82vh;
  max-width: 600px;
  padding: 20px;
  gap: 10px;
  margin: 0 auto 16vh auto;

  @media (min-width: 1024px) {
    min-height: 90vh;
  }
`;

const Messages = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  padding: 10px;
  gap: 10px;
`;

const ChatTop = styled.div``;
interface MessageProps {
  isOwner?: boolean;
}

const Message = styled.div<MessageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${(props) => (props.isOwner ? 'flex-end' : 'flex-start')};

  border-radius: ${(props) =>
    props.isOwner ? '8px 8px 0 8px' : '8px 8px 8px 0'};

  padding: 10px;
  background-color: ${(props) => (props.isOwner ? '#00b37e' : '#202024')};
`;

const MessageContent = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #e1e1e6;
`;

const ChatBottom = styled.div``;

const Actions = styled.div`
  display: flex;
  flex: 1;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  padding: 10px;
  gap: 10px;

  position: fixed;
  bottom: 8vh;
  left: 0;
  right: 0;
  z-index: 10;

  background-color: #121214;
`;

const MessageInput = styled.input`
  padding: 8px;
  display: flex;
  flex: 1;

  background-color: #121214;
  border-radius: 8px;
  border: 1px solid white;

  font-size: 16px;
  color: #e1e1e6;

  :hover,
  :focus {
    border: 1px solid #00b37e;
  }
`;

const SendMessageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid white;
  background-color: transparent;
  color: white;

  border-radius: 8px;
  padding: 16px;

  :hover {
    border: 1px solid #00b37e;
    color: #00b37e;
  }
`;

const Chat = () => {
  const chatTopRef = useRef<HTMLDivElement>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const paginationObserver = useRef<IntersectionObserver>(
    {} as IntersectionObserver,
  );

  const windowHeightRef = useRef(0);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef?.current?.scrollIntoView({ behavior: 'auto' });
  }, []);

  useEffect(() => {
    windowHeightRef.current = window.innerHeight;

    const resizer = () => {
      const container = actionsRef.current;

      if (!container) return;

      const newBottomPosition =
        window.innerHeight - windowHeightRef.current > 0 ? 20 : 0;

      container.style.bottom = `calc(8vh + ${newBottomPosition}px)`;
    };

    window.addEventListener('resize', () => resizer());

    document.addEventListener('DOMContentLoaded', () => resizer());

    return () => {
      window.removeEventListener('resize', () => resizer());

      document.removeEventListener('DOMContentLoaded', () => resizer());
    };
  }, []);

  useEffect(() => {
    if (!chatTopRef.current) return;

    paginationObserver.current = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.intersectionRatio > 0) {
          console.log("Chat's top");
        }
      }
    });

    const localObserver = paginationObserver.current;
    const localChatTop = chatTopRef.current;
    localObserver.observe(chatTopRef.current);

    return () => {
      localObserver.unobserve(localChatTop);
    };
  }, []);

  return (
    <Container>
      <Messages>
        <ChatTop ref={chatTopRef} />
        <Message>
          <MessageContent>Lorem ipsum dolor sit amet,</MessageContent>
        </Message>
        <Message>
          <MessageContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </MessageContent>
        </Message>
        <Message>
          <MessageContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MessageContent>
        </Message>
        <Message isOwner>
          <MessageContent>Lorem</MessageContent>
        </Message>
        <Message isOwner>
          <MessageContent>Lorem ipsum dolor sit amet, c</MessageContent>
        </Message>
        <Message>
          <MessageContent>Lorem ipsum dolor sit amet,</MessageContent>
        </Message>
        <Message>
          <MessageContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </MessageContent>
        </Message>
        <Message>
          <MessageContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MessageContent>
        </Message>
        <Message isOwner>
          <MessageContent>Lorem</MessageContent>
        </Message>
        <Message isOwner>
          <MessageContent>Lorem ipsum dolor sit amet, c</MessageContent>
        </Message>
        <Message>
          <MessageContent>Lorem ipsum dolor sit amet,</MessageContent>
        </Message>
        <Message>
          <MessageContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </MessageContent>
        </Message>
        <Message>
          <MessageContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MessageContent>
        </Message>
        <Message isOwner>
          <MessageContent>Lorem</MessageContent>
        </Message>
        <Message isOwner>
          <MessageContent>Lorem ipsum dolor sit amet, c</MessageContent>
        </Message>
        <ChatBottom ref={chatBottomRef} />
      </Messages>
      <Actions ref={actionsRef}>
        <MessageInput type="text" />
        <SendMessageButton>
          <IoSend />
        </SendMessageButton>
      </Actions>
    </Container>
  );
};

export default Chat;
