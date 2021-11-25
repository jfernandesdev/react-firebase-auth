import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 8%;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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
