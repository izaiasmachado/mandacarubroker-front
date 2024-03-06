import { Background, Input, SubmitButton } from "@/styles/global";
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

export default function Login() {
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
            <Input type="text" placeholder="Usuário"></Input>
            <Input type="password" placeholder="Senha"></Input>
          </LoginFormContainer>
          <LoginSubmitionContainer>
            <SubmitButton>Entrar</SubmitButton>
            <DontHaveAccountMessage>
              Não tem uma conta? <Link href="/cadastro">Cadastre-se</Link>
            </DontHaveAccountMessage>
          </LoginSubmitionContainer>
        </LoginConteiner>
      </LoginWrapper>
    </>
  );
}
