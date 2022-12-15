import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;

  min-height: 82vh;
  max-width: 600px;
  padding: 20px;
  gap: 10px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    min-height: 90vh;
  }
`;

const Chat = () => {
  return <Container>Chat</Container>;
};

export default Chat;
