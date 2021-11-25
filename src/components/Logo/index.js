import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 150px;
  position: absolute;
  top: 5%;
  left: 5%;

  @media(max-width: 768px) {
    width: 100px;
    position: relative;
    left: 0;
    margin-top: 10px;
  }
`;

export const Logo = () => {
  return <Image src='./logo-hello-world.svg' />
}