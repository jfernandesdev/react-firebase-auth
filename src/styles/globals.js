import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #171D22;
    --green: #5ED5A8;

    --gray: #A0A0A0;
    --gray100: #BDADAD;
    --gray200: #909090;
    --gray300: #777777;
    --gray-line: #EAEAEA;

    --link: #72B7CD;

    accent-color: var(--green);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', Segoe UI, Roboto, sans-serif;
  }

  html, body {
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font: 400 16px 'Poppins', sans-serif;
    
    &::placeholder {
      color: var(--gray);
    }
   
  }

  a {
    color: var(--link);

    :hover {
      color: var(--green);
    }
  }

  @keyframes float{
    0%,100%{
      transform:translate(0, 0);
    }
    50%{
      transform:translate(-10px, -15px);
    }
  }
`;
