import React from 'react';

import PostItem from './postItemComponent';

interface Owner {
  name: string;
  avatarUrl: string;
  role: string;
}

interface PostItem {
  owner: Owner;
  createdAt: Date;
  contentText: string;
  contentImage: string;
}

interface PostsProps {
  posts: PostItem[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <PostItem key={Date.now()} {...post} />
      ))}
    </>
  );
};

export default Posts;
