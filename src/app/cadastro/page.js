"use use client";

import {
  BackgroundCadastro,
  CadastroWrapper,
  CadastroConteiner,
  CadastroTitle,
  CadastroFormContainer,
  CadastroFormSubmitButton,
  Input,
} from "@/styles/cadastro";

export default function Cadastro() {
  return (
    <>
      <BackgroundCadastro />
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
          <CadastroFormSubmitButton>Cadastrar</CadastroFormSubmitButton>
        </CadastroConteiner>
      </CadastroWrapper>
    </>
  );
}
