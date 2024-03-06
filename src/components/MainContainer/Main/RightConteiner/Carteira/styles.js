"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  align-items: center;
  width: 100%;
  height: 100%;
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
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
  gap: 20px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
