import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #1B232A;
  max-width: 420px;
  min-width: 420px;
  height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-image: url('./star.svg');
  background-position: bottom;
  background-size: 80%;

  &::after {
    content: '';
    background: linear-gradient(0deg, rgba(94, 213, 168, 0) 20.83%, rgba(94, 213, 168, 0.15) 100%);
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media(max-width: 768px) {
    width: 100vw;
    max-width: 100%;
    height: 35vw;
    padding: 10px;
  }
`;

export const Image = styled.img`
  animation: float 10s ease-in-out infinite;
  margin-top: 100px;

  @media(max-width: 768px) {
    position: absolute;
    width: 30%;
    top: 15%;
    right: 20%;
    margin-top: 0;
  }
`;