import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid var(--white);
  margin-right: 10px;

  @media(max-width: 768px) {
    margin: 0;
  }
`;

export const DataUser = styled.div`
  @media(max-width: 768px) {
    display: none;
  }
`;

export const Name = styled.p`
  color: var(--white);
  font-size: 0.9em;
  line-height: 0;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const Email = styled.span`
  font-size: 0.75em;
  color: var(--gray300);
`;