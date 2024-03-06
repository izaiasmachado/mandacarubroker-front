import {
  CadastroWrapper,
  CadastroConteiner,
  CadastroTitle,
  CadastroFormContainer,
  TopToolbar,
} from "@/styles/cadastro";

import { Background, SubmitButton, Input } from "@/styles/global";
import { FaArrowLeft } from "react-icons/fa";

export default function Cadastro() {
  return (
    <>
      <Background />
      <CadastroWrapper>
        <CadastroConteiner>
          <TopToolbar>
            <a href="/" alt="Voltar para a página inicial">
              <FaArrowLeft
                style={{
                  cursor: "pointer",
                }}
                size={20}
                color={"#fff"}
              />
            </a>
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
