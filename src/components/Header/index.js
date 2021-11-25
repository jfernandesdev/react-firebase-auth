import { Container, Flex, Button } from './styles';
import { Logo } from '../Logo';
import { InfoUser } from '../InfoUser';

export const Header = () => {
  return(
    <Container>
        <Logo />

        <InfoUser
          avatar='https://github.com/jfernandesdev.png'
          name='Jeferson Fernandes'
          email='jfernandes.dev@gmail.com'
        />

        <Flex>
          <Button>Sair</Button>
        </Flex>
    </Container>
  );
}