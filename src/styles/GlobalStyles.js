import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  }
body {
    height: 100vh;
    width: 100vw;
    background: #EFF5FF;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

export {GlobalStyles};