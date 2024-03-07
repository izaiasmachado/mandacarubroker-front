'use client'

import styled from "styled-components"

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #011938;
    color: #fff;
    min-width: 10%;
    height: calc(100vh - 6rem);
    padding: 1rem;
`
export const ContainerProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5%;
  gap: 1rem;
  width: 15rem;
  height: 4rem;
`;

export const Icon = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: solid 2px #ff8c1f;
  background-color: white;
`;

export const InformationUser = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-weight: 500;
  color: white;
  font-size: 1.4rem;
  
`;

export const UserName = styled.span`
  font-weight:700;
  color: #FF8C1F;
  font-size: 1.2rem;
`;
