import React, { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
  IoChatbox,
  IoChatboxOutline,
  IoHomeOutline,
  IoHome,
} from 'react-icons/io5';
import Image from 'next/image';

const MobileContainer = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;

const BottomNavigation = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-around;
  z-index: 10;
  padding: 6px 0;

  background-color: #121214;
`;

interface NavigationButtonProps {
  readonly isActive: boolean;
}

const NavigationButton = styled.button<NavigationButtonProps>`
  border: none;
  background-color: transparent;

  color: ${(props) => (props.isActive ? '#00b37e' : '#e1e1e6')};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  width: 100%;
`;

const BottomNavbar = () => {
  const router = useRouter();
  const [homeRoute] = useState('/');
  const [messagesRoute] = useState('/messages');
  const [profileRoute] = useState('/profile');

  const handleClickNavigate = useCallback(
    (route: string) => {
      router.push(route);
    },
    [router],
  );

  const isHomeActive = useMemo(
    () => router.asPath.endsWith(homeRoute),
    [router, homeRoute],
  );
  const isMessagesActive = useMemo(
    () => router.asPath.endsWith(messagesRoute),
    [router, messagesRoute],
  );
  const isProfileActive = useMemo(
    () => router.asPath.endsWith(profileRoute),
    [router, profileRoute],
  );

  return (
    <MobileContainer>
      <BottomNavigation>
        <NavigationButton
          onClick={() => handleClickNavigate(homeRoute)}
          isActive={isHomeActive}
        >
          {isHomeActive ? <IoHome /> : <IoHomeOutline />}
        </NavigationButton>
        <NavigationButton
          onClick={() => handleClickNavigate(messagesRoute)}
          isActive={isMessagesActive}
        >
          {isMessagesActive ? <IoChatbox /> : <IoChatboxOutline />}
        </NavigationButton>
        <NavigationButton
          onClick={() => handleClickNavigate(profileRoute)}
          isActive={isProfileActive}
        >
          <Image
            style={{
              borderRadius: '50%',
              border: `${isProfileActive ? '2px solid #00b37e' : 'none'}`,
            }}
            src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
            alt="User avatar"
            width={20}
            height={20}
          />
        </NavigationButton>
      </BottomNavigation>
    </MobileContainer>
  );
};

export default BottomNavbar;
