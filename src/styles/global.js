"use client";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const SubmitButton = styled.div`
  font-size: 1.4rem;
  color: #fff;
  padding: 10px 20px;
  border: solid 2px #ff8c1f;
  border-radius: 20px;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  max-width: 200px;
  width: 100%;

  &:hover {
    background-color: #ff8c1f;
    transition: 0.8s;
    box-shadow: 0 0 1px #ff8c1f;
  }
`;

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-image: url("/img/telaLogin.jpg");
  filter: blur(5px);
  opacity: 0.4;
`;

export const Input = styled.input`
  color: #fff;
  background-color: #0a3d81;
  border: none;
  max-width: 250px;
  width: 100%;
  line-height: 40px;
  border-bottom: 2px solid #ff8c1f;

  &:invalid {
    border-bottom: 2px solid red;
  }

  &::placeholder,
  &:active,
  &:focus {
    color: #fff;
    outline: none;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    background-color: #0a3d81;
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
  &:hover,
  &:-webkit-autofill:hover {
    padding-bottom: 5px;
    transition: 0.3s;
  }
`;

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%; // 1rem = 10px -> 1o/16px = 62.5% (1.4rem = 14px)        
    }

    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;        
        background-color: #011B3F;
    }
`;

export const ValidationErrorMessage = styled.div`
  color: red;
  font-size: 1.4rem;
  width: 100%;
  max-width: 250px;
  font-weight: 500;
`;

export default GlobalStyles;
