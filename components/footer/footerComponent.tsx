import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100vw;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.span`
  color: #8d8d99;

  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Powered by Tairone Livinalli</FooterText>
    </FooterContainer>
  );
};

export default Footer;
