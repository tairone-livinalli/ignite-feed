import Head from 'next/head';
import styled from 'styled-components';
import Posts from '../components/posts/postsComponent';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-height: 90vh;
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 20px;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Feed</title>
      </Head>
      <Main>
        <Posts />
        <Posts />
      </Main>
    </Container>
  );
}
