import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 150px;

  @media(max-width: 768px) {
    width: 125px;
  }
`;

export const Logo = () => {
  return <Image src='./logo-hello-world.svg' />
}