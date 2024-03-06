import {
  CadastroWrapper,
  CadastroConteiner,
  CadastroTitle,
  CadastroFormContainer,
  TopToolbar,
} from "@/styles/cadastro";

import { Background, SubmitButton, Input } from "@/styles/global";
import { FaArrowLeft } from "react-icons/fa";

import Link from "next/link";

export default function Cadastro() {
  return (
    <>
      <Background />
      <CadastroWrapper>
        <CadastroConteiner>
          <TopToolbar>
            <Link href="/login">
              <FaArrowLeft size={20} color={"#fff"} />
            </Link>
          </TopToolbar>
          <CadastroFormContainer>
            <CadastroTitle>Cadastro</CadastroTitle>
            <Input type="text" placeholder="Nome de usuário"></Input>
            <Input type="text" placeholder="E-mail"></Input>
            <Input type="date"></Input>
            <Input type="password" placeholder="Senha"></Input>
            <Input type="password" placeholder="Confirme a senha"></Input>
            <SubmitButton>Cadastrar</SubmitButton>
          </CadastroFormContainer>
        </CadastroConteiner>
      </CadastroWrapper>
    </>
  );
}
