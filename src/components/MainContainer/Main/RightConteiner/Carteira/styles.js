"use client";

import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  height: 100%;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 20px;
    justify-content: space-between;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
`;

export const Input = styled.input`
  padding: 10px;
  outline: none;
  width: 110px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const RadioButton = styled.input`
  margin-right: 5px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 160px;
`;
