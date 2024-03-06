"use use client";

import {
  CadastroWrapper,
  CadastroConteiner,
  CadastroTitle,
  CadastroFormContainer,
} from "@/styles/cadastro";

import { Background, SubmitButton, Input } from "@/styles/global";

export default function Cadastro() {
  return (
    <>
      <Background />
      <CadastroWrapper>
        <CadastroConteiner>
          <CadastroTitle>Cadastro</CadastroTitle>
          <CadastroFormContainer>
            <Input type="text" placeholder="Nome de usuário"></Input>
            <Input type="text" placeholder="E-mail"></Input>
            <Input type="date"></Input>
            <Input type="password" placeholder="Senha"></Input>
            <Input type="password" placeholder="Confirme a senha"></Input>
          </CadastroFormContainer>
          <SubmitButton>Cadastrar</SubmitButton>
        </CadastroConteiner>
      </CadastroWrapper>
    </>
  );
}
