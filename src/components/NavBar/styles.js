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
