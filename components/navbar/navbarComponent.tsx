import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 10vh;
  width: 100vw;
  gap: 8px;

  background-color: #202024;
`;

const NavbarTitle = styled.p`
  color: #e1e1e6;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.6;
`;

const Navbar = () => {
  return (
    <Container>
      <Image
        src="/icon.svg"
        alt="Icon of the social media"
        width={40}
        height={40}
      />
      <NavbarTitle>Tai Media</NavbarTitle>
    </Container>
  );
};

export default Navbar;
