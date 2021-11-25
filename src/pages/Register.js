import React from 'react';
import { AsideBannerSpace } from '../components/AsideBannerSpace';
import { ContainerForm, Center } from './styles';

import { SocialButtons } from '../components/SocialButtons';
import { Form, Title, Input, Separator } from '../components/Form';
import Button from '../components/Button';

const Register = () => {
  return (
    <ContainerForm>
     <AsideBannerSpace image='./astronaut-register.svg' />

     <Center>
        <Form action=''>
          <Title>Criar conta com</Title>
          <SocialButtons />
          <Separator> - ou - </Separator>

          <Input 
            type='text'
            name='name'
            placeholder='Nome completo'
            required
          />

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

          <Input 
            type='password'
            name='repeat-password'
            placeholder='Repetir a senha'
            required
          />

          <Button type='submit'>Criar conta</Button>
          <span>Já tem um conta? <a href='/login'>Login</a></span>
        </Form>
      </Center>
    </ContainerForm>
  )
}

export default Register;