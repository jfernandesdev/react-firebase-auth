import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px 8%;

  @media(max-width: 768px) {
    justify-content: space-between;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 10px;
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid var(--green);
  color: var(--green);
  border-radius: 20px;
  padding: 5px 20px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: var(--green);
    color: var(--black);
  }
`;
