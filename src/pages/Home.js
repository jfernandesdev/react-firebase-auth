import React from 'react';
import { Header } from '../components/Header';
import { Container, Content, Text } from './styles';


const Home = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Text>
          <p>O <strong>Hello World</strong> é um pequeno código que pode ser desenvolvido em diferentes linguagens de programação.</p>
          <p>Seu objetivo é facilitar o conhecimento da estrutura básica e o funcionamento da linguagem. Por isso pode ser desenvolvido em várias linguagens como C++, PHP, Javascript, HTML, e em muitas outras. </p>
          <p>Este por exemplo, é o meu “Hello World” para me aprofundar em autenticação JWT com Next.Js.</p>
          <span>Att. Jeferson Fernandes <br /> jfernandesdev@gmail.com</span>   
        </Text>

        <img src="/astronaut-hello-world.svg" alt="Astronauta" className="imgAstronaut" />  

      </Content>
    </Container>
  )
}

export default Home;