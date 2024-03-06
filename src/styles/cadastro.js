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
  gap: 28px;
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
