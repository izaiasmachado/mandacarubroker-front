"use client";

import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #011229;
`;

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem;
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 4rem;
`;

export const LogoTextTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f2f2f2;
`;

export const LogoTextSubtitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #084EB2;
`;

export const LogoTextContainer = styled.div`
  margin-left: 0.55rem;
`;

export const ContainerProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 15rem;
  height: 4rem;
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #ff8c1f;
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

export const IoLogOut = styled.div`
`
