import styled from 'styled-components';

export default styled.button`
  background: ${props => props.outlined ? 'transparent' : 'var(--green)'};
  color: var(--black);
  border: ${props => props.outlined ? '1px solid var(--gray-line)' : 'none'};
  font-weight: ${props => props.outlined ? '400' : '700'};
 
  padding: 8px 50px;
  min-width: ${props => props.outlined && '190px' };
  border-radius: 9px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: 0;
  transition: background 0.2s;
  margin: 10px;
  
  > img { 
    margin-right: 10px;
  }

  &:hover {
    background: ${props => props.outlined && 'var(--white)'};
    border-color: ${props => props.outlined && 'var(--white)'};
    filter: brightness(0.95);
  }

  &:disabled {
    filter: brightness(1);
    cursor: not-allowed;
  }

  @media(max-width: 768px) {
    min-width: 100px;
    padding: 10px 20px;
  }
`;
