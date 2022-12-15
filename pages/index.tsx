import Head from 'next/head';
import styled from 'styled-components';
import Posts from '../components/posts/postsComponent';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-height: 82vh;
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    min-height: 90vh;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 20px;
`;

const posts = [
  {
    owner: {
      name: 'Jane Cooper',
      role: 'Dev Front-end',
      avatarUrl:
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
    },
    createdAt: new Date(Date.now() - 36e5 - 1),
    contentText:
      'Fala galeraa 👋 \n Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 \n 👉 jane.design/doctorcare \n #novoprojeto #nlw #rocketseat \n',
    contentImage:
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
  },
  {
    owner: {
      name: 'Devon Lane',
      role: 'Dev Front-end',
      avatarUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },
    createdAt: new Date(Date.now() - 36e5 - 2),
    contentText:
      'Fala pessoal 👋 \n Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 \n Acesse e deixe seu feedback 👉 devonlane.design \n #uiux #userexperience \n',
    contentImage:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  },
];

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Feed</title>
      </Head>
      <Main>
        <Posts posts={[...posts]} />
      </Main>
    </Container>
  );
}
