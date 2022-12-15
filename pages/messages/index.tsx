import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  min-height: 82vh;
  max-width: 600px;
  padding: 20px;
  gap: 10px;
  margin: 0 auto 8vh auto;

  @media (min-width: 1024px) {
    min-height: 90vh;
  }
`;

const Chat = styled.button`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  border-radius: 8px;
  padding: 20px;
  gap: 20px;

  background-color: #202024;
  border: none;

  :hover {
    opacity: 0.8;
  }
`;

const ChatAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px;
  border: 2px solid #00b37e;
  border-radius: 8px;
`;

const ChatInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
`;

const ChatName = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #e1e1e6;
`;

const ChatLastMessage = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #8d8d99;
  text-align: left;
`;

const Messages = () => {
  const router = useRouter();

  const handleClickNavigateToChat = (id: string) => {
    router.push(`${router.asPath}/${id}`);
  };

  return (
    <Container>
      <Chat onClick={() => handleClickNavigateToChat('sample-id')}>
        <ChatAvatar>
          <Image
            src={
              'https://images.unsplash.com/photo-1669807522496-efbc51b2f80b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            }
            alt={'User Avatar'}
            height={60}
            width={60}
            style={{ borderRadius: '4px', objectFit: 'cover' }}
          />
        </ChatAvatar>
        <ChatInfo>
          <ChatName>Malena Tudi</ChatName>
          <ChatLastMessage>Hey, how’s it goin?</ChatLastMessage>
        </ChatInfo>
      </Chat>
      <Chat onClick={() => handleClickNavigateToChat('sample-id')}>
        <ChatAvatar>
          <Image
            src={
              'https://images.unsplash.com/photo-1669081230149-4e266ad4f9c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            }
            alt={'User Avatar'}
            height={60}
            width={60}
            style={{ borderRadius: '4px', objectFit: 'cover' }}
          />
        </ChatAvatar>
        <ChatInfo>
          <ChatName>Jakob Curtis</ChatName>
          <ChatLastMessage>
            Yo, are you going to the Jake’s wedding?
          </ChatLastMessage>
        </ChatInfo>
      </Chat>
      <Chat onClick={() => handleClickNavigateToChat('sample-id')}>
        <ChatAvatar>
          <Image
            src={
              'https://images.unsplash.com/photo-1669719468229-44c8e3e5c09e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80'
            }
            alt={'User Avatar'}
            height={60}
            width={60}
            style={{ borderRadius: '4px', objectFit: 'cover' }}
          />
        </ChatAvatar>
        <ChatInfo>
          <ChatName>Abram Levin</ChatName>
          <ChatLastMessage>
            Amir said we’d be staying over for a while... but ...
          </ChatLastMessage>
        </ChatInfo>
      </Chat>
      <Chat onClick={() => handleClickNavigateToChat('sample-id')}>
        <ChatAvatar>
          <Image
            src={
              'https://images.unsplash.com/photo-1669406999312-0821a42a3887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2871&q=80'
            }
            alt={'User Avatar'}
            height={60}
            width={60}
            style={{ borderRadius: '4px', objectFit: 'cover' }}
          />
        </ChatAvatar>
        <ChatInfo>
          <ChatName>Marilyn Herwitz</ChatName>
          <ChatLastMessage>hey, i got new memes for you</ChatLastMessage>
        </ChatInfo>
      </Chat>
    </Container>
  );
};

export default Messages;
