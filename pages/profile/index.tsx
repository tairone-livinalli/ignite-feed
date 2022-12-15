import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { HiOutlinePencilSquare } from 'react-icons/hi2';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  min-height: 82vh;
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    min-height: 90vh;
  }
`;

const ProfileCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  border-radius: 8px;
  gap: 20px;

  background-color: #202024;
`;

const ProfileBackground = styled.div`
  width: 100%;
  height: 15vh;

  border-radius: 8px 8px 0 0;
  background-image: url('https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  background-repeat: no-repeat;
  background-position: center;
`;

const ProfileAvatar = styled.div`
  position: absolute;
  display: flex;

  top: 10vh;
  padding: 4px;
  border: 2px solid #00b37e;
  border-radius: 8px;
`;

const ProfileUserInfo = styled.div`
  margin-top: 5vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

const ProfileName = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #e1e1e6;
`;

const ProfileRole = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #8d8d99;
`;

const Divider = styled.div`
  width: 100%;
  height: 0px;

  border: 1px solid #323238;
`;

const EditProfileButton = styled.button`
  background-color: transparent;

  border-radius: 8px;
  border: 1px solid #00b37e;
  color: #00b37e;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 16px;
  width: 90%;
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 16px;
`;

const Profile = () => {
  return (
    <Container>
      <ProfileCard>
        <ProfileBackground />
        <ProfileAvatar>
          <Image
            src={
              'https://images.unsplash.com/photo-1669993427100-221137cc7513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80'
            }
            alt={'Avatar'}
            height={60}
            width={60}
            style={{ borderRadius: '4px', objectFit: 'cover' }}
          />
        </ProfileAvatar>
        <ProfileUserInfo>
          <ProfileName>Leslie Alexander</ProfileName>
          <ProfileRole>UI Designer</ProfileRole>
        </ProfileUserInfo>
        <Divider />
        <EditProfileButton>
          <HiOutlinePencilSquare size={25} />
          <p>Edit Profile</p>
        </EditProfileButton>
      </ProfileCard>
    </Container>
  );
};

export default Profile;
