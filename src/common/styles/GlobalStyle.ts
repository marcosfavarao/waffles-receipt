import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
	  --background: #5494f3;
	  --foreground: #f2f2f2;
    --title: #333;
	  --content: #444;
    --blue: #5494f3;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    };

    @media (max-width: 720px) {
      font-size: 87.5%;
    };
  };

  body {
    background: var(--background);
		color: var(--content);
    -webkit-font-smoothing: antialiased;
  };

	body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  };

  h1, h2, h3, h4, h5, h6, strong, b {
    color: var(--title);
    font-weight: 600;
  };

  button {
    cursor: pointer;
  };

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  };
`;
