import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { AsideBannerSpace } from '../components/AsideBannerSpace';
import { SocialButtons } from '../components/SocialButtons';
import { Form, Title, Input, Separator, WrapWithSpace } from '../components/Form';
import Button from '../components/Button';

import { ContainerForm, Flex, Center } from './styles';

const Login = () => {

  const handleSubmit = () => {
    alert('Form enviado!');
  }

  return (
    <ContainerForm>
      <AsideBannerSpace image='./astronaut-login.svg' />

      <Center>
        <Form onSubmit={handleSubmit}>
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
          <span>Não tem uma conta? <Link to='/register'><a>Registrar</a></Link></span>  
        </Form>
      </Center>
    </ContainerForm>
  )
}

export default Login;