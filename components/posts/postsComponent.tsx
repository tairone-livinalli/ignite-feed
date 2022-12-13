import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  border-radius: 8px;
  padding: 40px;
  gap: 20px;

  background-color: #202024;
`;

const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PostOwner = styled.div`
  display: flex;
  gap: 16px;
`;

const PostOwnerAvatar = styled.div`
  display: flex;

  padding: 4px;
  border: 2px solid #00b37e;
  border-radius: 8px;
`;

const PostOwnerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
`;

const PostOwnerName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #e1e1e6;
`;

const PostOwnerRole = styled.p`
  font-size: 14px;
  color: #8d8d99;
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostInfoTime = styled.p`
  font-size: 14px;
  color: #8d8d99;
`;

const PostContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
`;

const PostContentText = styled.p`
  font-size: 16px;
  color: #c4c4cc;
`;

const Divider = styled.div`
  width: 100%;
  height: 0px;

  border: 1px solid #323238;
`;

const Form = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  width: 100%;
`;

const FormLabel = styled.label`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;

  width: 100%;
`;

const FormSpan = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #e1e1e6;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 8px;

  background-color: #121214;
  border-radius: 8px;

  font-size: 16px;
  color: #c4c4cc;

  :hover,
  :focus {
    border: 1px solid #00b37e;
  }
`;

const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;

  background-color: #00875f;
  border: none;
  border-radius: 8px;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  :hover {
    background-color: #00b37e;
  }
`;

const Posts = () => {
  return (
    <PostContainer>
      <PostTitle>
        <PostOwner>
          <PostOwnerAvatar>
            <Image
              src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
              alt="Jane Cooper Profile"
              height={40}
              width={40}
              style={{ borderRadius: '4px' }}
            />
          </PostOwnerAvatar>
          <PostOwnerInfo>
            <PostOwnerName>Jane Cooper</PostOwnerName>
            <PostOwnerRole>Dev Front-end</PostOwnerRole>
          </PostOwnerInfo>
        </PostOwner>
        <PostInfo>
          <PostInfoTime>Posted 1hr ago</PostInfoTime>
        </PostInfo>
      </PostTitle>
      <PostContent>
        <PostContentText>Fala galeraa 👋</PostContentText>
        <PostContentText>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </PostContentText>
        <PostContentText>👉 jane.design/doctorcare</PostContentText>
        <PostContentText>#novoprojeto #nlw #rocketseat</PostContentText>
      </PostContent>
      <Divider />
      <Form>
        <FormLabel>
          <FormSpan>Deixe seu feedback</FormSpan>
          <FormTextArea name="comment" id="comment" rows={5}></FormTextArea>
        </FormLabel>
        <FormButton>Publicar</FormButton>
      </Form>
    </PostContainer>
  );
};

export default Posts;
