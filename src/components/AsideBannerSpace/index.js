import React from 'react';
import { Logo } from '../Logo';
import { Container, Image } from './styles';

export const AsideBannerSpace = ({image, noAnimation}) => {
  return (
    <Container>
      <Logo />
      <Image src={image} className={noAnimation ? 'noAnimation': ''} />
    </Container>
  );
}