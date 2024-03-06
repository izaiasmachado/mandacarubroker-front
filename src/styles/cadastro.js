"use client";

import styled from "styled-components";

export const CadastroWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const CadastroConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  height: 100%;
  max-height: 500px;
  background-color: #0a3d81;
  border-radius: 10px;
  gap: 6px;
`;

export const CadastroTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin-bottom: -10px;
`;

export const CadastroFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const CadastroFormSubmitButton = styled.div`
  margin-top: 10px;
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

export const Input = styled.input`
  color: #fff;
  background-color: #0a3d81;
  border: none;
  max-width: 250px;
  width: 100%;
  padding: 0 20px;
`;

export const TopToolbar = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 20px;
`;
