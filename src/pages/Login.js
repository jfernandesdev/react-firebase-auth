import React from 'react';
import { AsideBannerSpace } from '../components/AsideBannerSpace';
import { ContainerForm, Flex, Center } from './styles';

import { SocialButtons } from '../components/SocialButtons';
import { Form, Title, Input, Separator, WrapWithSpace } from '../components/Form';
import Button from '../components/Button';

const Login = () => {
  return (
    <ContainerForm>
      <AsideBannerSpace image='./astronaut-login.svg' />

      <Center>
        <Form>
          <Title>Entrar com</Title>
          <SocialButtons />
          <Separator> - ou - </Separator>

          <Input 
            type='email' 
            name='email' 
            placeholder='E-mail' 
            required 
          />

          <Input 
            type='password' 
            name='password' 
            placeholder='Senha' 
            required 
          />

          <WrapWithSpace>
            <Flex>
              <Input type='checkbox' name='remember' id='remember' />
              <label htmlFor="remember">Lembrar-me</label>
            </Flex>

            <a href='#'>Esqueceu sua senha?</a>
          </WrapWithSpace>

          <Button type='submit'>Entrar</Button>
          <span>Não tem uma conta? <a href='/register'>Registrar</a></span>  
        </Form>
      </Center>
    </ContainerForm>
  )
}

export default Login;