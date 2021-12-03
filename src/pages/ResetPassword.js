import { useDispatch } from 'react-redux';
import { useState } from 'react'; 
import { Link } from 'react-router-dom';

import { AsideBannerSpace } from '../components/AsideBannerSpace';
import { Form, Title, Input } from '../components/Form';
import Button from '../components/Button';

import { resetPasswordInitiate } from '../redux/actions';

import { ContainerForm, Center } from './styles';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email) {
      return;
    }

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: false
    };

    dispatch(resetPasswordInitiate(email, config));
    setEmail('');
  }

  return (
    <ContainerForm>
      <AsideBannerSpace image='./astronaut-reset-password.svg' noAnimation/>

      <Center>
        <Form onSubmit={handleSubmit}>
          <Title>Esqueceu sua senha?</Title>
          <span>Não se preocupe! É só nos dizer seu e-mail cadastrado que enviaremos um link para você redefinir sua senha.</span>
          <br />
          <Input 
            type='email' 
            name='email' 
            placeholder='E-mail'
            value={email}
            onChange={event => setEmail(event.target.value)}
            autoFocus
            required 
          />
          <Button type='submit' disabled={!email}>Recuperar minha senha</Button>
          <Link to='/login'><a>Voltar ao Login</a></Link>
        </Form>
      </Center>

      <ToastContainer />
    </ContainerForm>
  )
} 

export default ResetPassword;