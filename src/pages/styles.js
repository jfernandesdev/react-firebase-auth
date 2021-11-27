import styled from 'styled-components';

export const Container = styled.div`
  background: #1B232A;
  height: 100vh;
  overflow-y: hidden;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 20%;
    bottom: 0;
    background: linear-gradient(180deg, rgba(94, 213, 168, 0) 20.83%, rgba(94, 213, 168, 0.15) 100%);
  }

  @media(max-width: 768px) {
    height: auto;
    
    img.imgAstronaut { 
      width: 40%;
      transform: translateX(70%);
    }
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 768px) {
    display: block;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;

  @media(max-width: 768px) {
    display: block;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  width: 100%;
  height: 100vh;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  margin-left: -30px;
  z-index: 1;

  @media(max-width: 768px) {
    margin: 0;
    max-width: 100vw;
    height: auto;
    border-radius: 0;
  }
`;

export const Text = styled.div`
  padding: 6% 7%;
  max-width: 65%;
  
  p {
    color: var(--white);
    font-weight: 100;
    line-height: 30px;
    font-size: 18px;
    margin-bottom: 15px;
  }

  span {
    font-size: 15px;
    color: var(--gray300);
  }

  @media(max-width: 768px) {
    max-width: 100%;

    p { 
      font-size: 16px;
    }
  }
`;