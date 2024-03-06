"use client";

import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
`;

export const LoginConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  background-color: #0a3d81;
  height: 100%;
  gap: 50px;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const PartnerLogosContainer = styled.div`
  margin-bottom: -10px;
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const PartnerLogo = styled.div`
  img {
    width: 100%;
  }

  width: 100px;
`;

export const LoginSubmitionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const DontHaveAccountMessage = styled.p`
  color: #fff;
  font-size: 1.6rem;
  margin-top: 10px;
  a {
    color: #fff;
    text-decoration: underline;
  }
`;

export const ApplicationHeroTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ApplicationHeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 7.2rem;
  margin-top: -130px;
`;

export const ApplicationHeroTitleFirstLine = styled.div`
  font-weight: 700;
  color: #fff;
  mix-blend-mode: lighten;
`;

export const ApplicationHeroTitleSecondLine = styled.div`
  font-weight: 700;
  color: #00bbf4;
  mix-blend-mode: color-dodge;
`;
