import Image from 'next/image';
import React, { useState } from 'react';
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

interface Owner {
  name: string;
  avatarUrl: string;
  role: string;
}

interface PostItemProps {
  owner: Owner;
  createdAt: Date;
  contentText: string;
  contentImage: string;
}

const PostItem: React.FC<PostItemProps> = ({
  owner,
  createdAt,
  contentText,
  contentImage,
}) => {
  const [hoursDiff] = useState(() => {
    const hoursDifference = Math.abs(Date.now() - createdAt.getTime()) / 36e5;

    return Math.floor(hoursDifference);
  });
  const [contentLines] = useState<string[]>(() => {
    return contentText.split('\n');
  });

  return (
    <PostContainer>
      <PostTitle>
        <PostOwner>
          <PostOwnerAvatar>
            <Image
              src={owner.avatarUrl}
              alt={`${owner.name}'s avatar`}
              height={40}
              width={40}
              style={{ borderRadius: '4px' }}
            />
          </PostOwnerAvatar>
          <PostOwnerInfo>
            <PostOwnerName>{owner.name}</PostOwnerName>
            <PostOwnerRole>{owner.role}</PostOwnerRole>
          </PostOwnerInfo>
        </PostOwner>
        <PostInfo>
          <PostInfoTime>
            Posted {hoursDiff > 1 ? `${hoursDiff}hrs` : `${hoursDiff}hr`} ago
          </PostInfoTime>
        </PostInfo>
      </PostTitle>
      <PostContent>
        {contentLines.map((line) => (
          <PostContentText key={Date.now()}>{line}</PostContentText>
        ))}
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

export default PostItem;
