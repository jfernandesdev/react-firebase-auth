import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { AsideBannerSpace } from '../components/AsideBannerSpace';
import { SocialButtons } from '../components/SocialButtons';
import { Form, Title, Input, Separator, WrapWithSpace } from '../components/Form';
import Button from '../components/Button';

import { ContainerForm, Flex, Center } from './styles';

import { loginInitiate } from '../redux/actions';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  
  const { email, password } = state;
  const { currentUser, error } = useSelector((state) => state.user);
  
  const history = useHistory();
  
  useEffect(() => {
    if(currentUser) {
      history.push('/');
    }
  }, [currentUser, history]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email || !password) {
      return;
    }

    dispatch(loginInitiate(email, password));

    if(!error) {
      setState({
        email: "",
        password: "",
      })
    }
  };

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
            onChange={handleChange}
            value={email}
            required 
          />

          <Input 
            type='password' 
            name='password' 
            placeholder='Senha' 
            onChange={handleChange}
            value={password}
            required 
          />

          <WrapWithSpace>
            <Flex>
              <Input type='checkbox' name='remember' id='remember' />
              <label htmlFor="remember">Lembrar-me</label>
            </Flex>

            <Link to='/reset-password'><a>Esqueceu sua senha?</a></Link>
          </WrapWithSpace>

          <Button type='submit'>Entrar</Button>
          <span>Não tem uma conta? <Link to='/register'><a>Registrar</a></Link></span> 
        </Form>
      </Center>

      <ToastContainer />
    </ContainerForm>
  )
}

export default Login;