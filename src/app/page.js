"use client";

import styled from "styled-components";

const RedirectText = styled.h1`
  color: #fff;
  font-size: 2.4rem;
  padding: 20px 15px;
`;

export default function Dashboard() {
  if (typeof window === "undefined") return <></>;

  if (!localStorage || !localStorage.getItem("access_token")) {
    window.location.href = "/login";
    return (
      <div>
        <RedirectText>Redirecionando para tela de login...</RedirectText>
      </div>
    );
  }

  window.location.href = "/dashboard";
  return (
    <div>
      <RedirectText>Redirecionando para tela de dashboard...</RedirectText>
    </div>
  );
}
