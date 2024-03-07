"use client";

import {
  Background,
  Input,
  SubmitButton,
  ValidationErrorMessage,
} from "@/styles/global";

import {
  LoginConteiner,
  LoginWrapper,
  LoginFormContainer,
  PartnerLogo,
  PartnerLogosContainer,
  LoginSubmitionContainer,
  DontHaveAccountMessage,
  ApplicationHeroTitleContainer,
  ApplicationHeroTitle,
  ApplicationHeroTitleFirstLine,
  ApplicationHeroTitleSecondLine,
} from "@/styles/login";

import Link from "next/link";
import { useState } from "react";

import { api } from "@/lib/api";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [credentialsError, setCredentialsError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", {
        username: user,
        password: password,
      });
      if (credentialsError) setCredentialsError(false);
      localStorage.setItem("access_token", response.data.token);
      window.location.href = "/";
    } catch (error) {
      setCredentialsError(true);
    }
  };

  return (
    <>
      <Background />
      <LoginWrapper>
        <ApplicationHeroTitleContainer>
          <ApplicationHeroTitle>
            <ApplicationHeroTitleFirstLine>
              MANDACARU
            </ApplicationHeroTitleFirstLine>
            <ApplicationHeroTitleSecondLine>
              BROKER
            </ApplicationHeroTitleSecondLine>
          </ApplicationHeroTitle>
        </ApplicationHeroTitleContainer>
        <LoginConteiner>
          <PartnerLogosContainer>
            <PartnerLogo>
              <img src="img/logo-mandacaru.png" alt="Logo Mandacaru.dev" />
            </PartnerLogo>
            <PartnerLogo>
              <img src="img/b3-icone-white.png" alt="Logo B3" />
            </PartnerLogo>
          </PartnerLogosContainer>

          <LoginFormContainer>
            <Input
              type="text"
              placeholder="Usuário"
              onChange={(e) => setUser(e.target.value)}
            ></Input>
            <Input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>

            {credentialsError && (
              <ValidationErrorMessage>
                Usuário ou senha incorretos
              </ValidationErrorMessage>
            )}
          </LoginFormContainer>
          <LoginSubmitionContainer>
            <SubmitButton onClick={handleLogin}>Entrar</SubmitButton>
            <DontHaveAccountMessage>
              Não tem uma conta? <Link href="/cadastro">Cadastre-se</Link>
            </DontHaveAccountMessage>
          </LoginSubmitionContainer>
        </LoginConteiner>
      </LoginWrapper>
    </>
  );
}
