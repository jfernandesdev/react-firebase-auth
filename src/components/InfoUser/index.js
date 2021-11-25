import React from 'react';
import { Container, Avatar, DataUser, Name, Email } from './styles';

export const InfoUser = ({avatar, name, email}) => {
  return (
    <Container>
      <Avatar src={avatar ? avatar : './avatar-user.svg' } alt={name} />

      <DataUser>
        <Name>{ name }</Name>
        <Email>{ email } </Email>
      </DataUser>
    </Container>
  );
}