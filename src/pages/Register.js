import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { AsideBannerSpace } from '../components/AsideBannerSpace';
import { ContainerForm, Center } from './styles';

import { SocialButtons } from '../components/SocialButtons';
import { Form, Title, Input, Separator } from '../components/Form';
import Button from '../components/Button';

import { registerInitiate } from '../redux/actions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  var {currentUser, error} = useSelector((state) => state.user);
  
  const history = useHistory();

  useEffect(() => {
    if(currentUser) {
      history.push('/');
    }
  }, [currentUser, history]);

  const dispatch = useDispatch();
  const {displayName, email, password, passwordConfirm} = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== passwordConfirm){
      toast.error('As senhas não coincidem! Garanta que as senhas foram confirmadas corretamente', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    
    dispatch(registerInitiate(email, password, displayName));

    if(!error) {
      setState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      })
    } 
  };

  const handleChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  };

  return (
    <ContainerForm>
     <AsideBannerSpace image='./astronaut-register.svg' />

     <Center>
        <Form onSubmit={handleSubmit}>
          <Title>Criar conta com</Title>
          <SocialButtons />
          <Separator> - ou - </Separator>

          <Input 
            type='text'
            name='displayName'
            placeholder='Nome completo'
            onChange={handleChange}
            value={displayName}
            required
          />

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

          <Input 
            type='password'
            name='passwordConfirm'
            placeholder='Repetir a senha'
            onChange={handleChange}
            value={passwordConfirm}
            required
          />

          <Button type='submit'>Criar conta</Button>
          <span>Já tem um conta? <Link to='/login'><a>Login</a></Link></span>
        </Form>
      </Center>

      <ToastContainer />
    </ContainerForm>
  )
}

export default Register;