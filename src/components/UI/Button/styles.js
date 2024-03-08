"use client";

import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 10px 20px;
  width: ${(props) => (props ? props.width : "80px")};
  height: ${(props) => (props ? props.height : "30px")};
  min-height: 40px;
  font-size: 1.6rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${(props) => (props.clicked ? "#FF8C1F" : "#022A5D")};
  color: #fff;
  outline: none;

  &:hover {
    background-color: ${(props) => (props.clicked ? "#FF7C00" : "#063E85")};
  }
`;
