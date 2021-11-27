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
          <p>Seu objetivo é facilitar o conhecimento da estrutura básica e o funcionamento da linguagem. Por isso pode ser desenvolvido em várias linguagens como C++, PHP, Javascript, e em muitas outras. </p>
          <p>Reza a lenda, que quando você for criar o primeiro programa e não imprimir na tela, "Olá Mundo!" ou "Hello World!", receberá o castigo de não conseguir aprender a tal linguagem...</p>
          <p>Ps: Este projeto foi inicializado com um simples print 'hello world' em tela! 😅</p>
          <span>Att. Jeferson Fernandes <br /> jfernandes.dev@gmail.com</span>   
        </Text>

        <img src="/astronaut-hello-world.svg" alt="Astronauta" className="imgAstronaut" />  

      </Content>
    </Container>
  )
}

export default Home;