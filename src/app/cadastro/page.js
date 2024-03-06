"use use client";

import {
  CadastroWrapper,
  CadastroConteiner,
  CadastroTitle,
  CadastroFormContainer,
  CadastroFormSubmitButton,
  Input,
} from "@/styles/cadastro";

export default function Cadastro() {
  return (
    <CadastroWrapper>
      <CadastroConteiner>
        <CadastroTitle>Cadastro</CadastroTitle>
        <CadastroFormContainer>
          <Input type="text" placeholder="Nome de usuário"></Input>
          <Input type="text" placeholder="E-mail"></Input>
          <Input type="password" placeholder="Senha"></Input>
          <Input type="password" placeholder="Confirme a senha"></Input>
        </CadastroFormContainer>
        <CadastroFormSubmitButton>Cadastrar</CadastroFormSubmitButton>
      </CadastroConteiner>
    </CadastroWrapper>
  );
}
