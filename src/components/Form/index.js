import styled from 'styled-components';

export const Form = styled.form`
  padding: 64px 80px;
  display: flex;
  align-items: center;
  text-align: start;
  flex-direction: column;

  button {
    width: 100%;
  }

  label {
    margin-left: 5px;
  }

  span, label { 
    color: var(--gray200);
    font-weight: 400;
    display: flex;
    width: 100%;

    a { 
      margin-left: 5px;
    }
  }

  @media(max-width: 768px) {
    padding: 20px;
    max-width: 100vw;
    overflow: hidden;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  padding: 15px;
`

export const Input = styled.input`
  &:not([type='checkbox']) {
    width: 100%;
    margin: 10px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid var(--gray-line);
  }

  &:focus-visible {
    outline: 0;
    border-bottom: 2px solid var(--green);
  }
`;

export const WrapWithSpace = styled.div`
  width: 100%;
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  padding: 10px;
`;

export const Separator = styled.div`
  padding: 20px;
  color: var(--gray200);
  align-items: center;
`;