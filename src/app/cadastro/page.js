"use client";

import React, { useState } from "react";
import {
  CadastroWrapper,
  CadastroConteiner,
  CadastroTitle,
  CadastroFormContainer,
  TopToolbar,
  ErrorMessagesContainer,
  ErrorMessage,
} from "@/styles/cadastro";

import { Background, SubmitButton, Input } from "@/styles/global";
import { FaArrowLeft } from "react-icons/fa";

import Link from "next/link";

export default function Cadastro() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [birthDateError, setBirthDateError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitted, setSubmitted] = useState("");

  const clientValidationUsername = () => {
    if (username.length === 0) {
      return "Nome de usuário não pode ficar vazio";
    }
    return false;
  };

  const clientValidationEmail = () => {
    if (email.length === 0) {
      return "E-mail não pode ficar vazio";
    }
    return false;
  };

  const clientValidationBirthDate = () => {
    if (submitted && (birthDate === null || birthDate === "")) {
      return "Data de nascimento não pode ficar vazia";
    }

    if (calculateAge(new Date(birthDate)) < 18) {
      return "Você deve ter no mínimo 18 anos";
    }

    return false;
  };

  const clientValidationPassword = () => {
    if (password.length === 0) {
      return "Senha não pode ficar vazia";
    }

    if (password.length < 8) {
      return "Senha deve ter no mínimo 8 caracteres";
    }

    return false;
  };

  const clientValidation = () => {
    return (
      clientValidationUsername() === false &&
      clientValidationEmail() === false &&
      clientValidationBirthDate() === false &&
      clientValidationPassword() === false
    );
  };

  const handleCadastro = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!clientValidation()) return false;

    const response = await fetch(
      "https://api.mandacarubroker.com.br/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          birthDate,
          password,
          firstName: "",
          lastName: "",
        }),
      }
    );

    if (response.status === 409) {
      setUsernameError("Username already taken");
      return;
    }

    const data = await response.json();

    if (response.status === 201) {
      window.location.href = "/";
    }

    if (response.status === 400) {
      setUsernameError(data.username || false);
      setEmailError(data.email || false);
      setBirthDateError(data.birthDate || false);
      setPasswordError(data.password || false);
    }
  };

  const youngestPossibleDate = new Date();
  youngestPossibleDate.setFullYear(youngestPossibleDate.getFullYear() - 18);

  const youngestPossibleDateString = youngestPossibleDate.toLocaleString(
    "en-CA",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  const calculateAge = (birthday) => {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <>
      <Background />
      <CadastroWrapper>
        <CadastroConteiner>
          <TopToolbar>
            <Link href="/">
              <FaArrowLeft size={20} color={"#fff"} />
            </Link>
          </TopToolbar>
          <CadastroFormContainer>
            <CadastroTitle>Cadastro</CadastroTitle>
            <Input
              type="text"
              placeholder="Nome de usuário"
              onChange={(e) => setUsername(e.target.value)}
              required={usernameError || (submitted && username.length === 0)}
            ></Input>
            <Input
              type="text"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              required={emailError || (submitted && email.length === 0)}
            ></Input>
            <Input
              type="date"
              onChange={(e) => setBirthDate(e.target.value)}
              max={youngestPossibleDateString}
              min="1900-01-01"
              required={
                birthDateError || (submitted && clientValidationBirthDate())
              }
            ></Input>
            <Input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              required={passwordError || (submitted && password.length === 0)}
            ></Input>
            <ErrorMessagesContainer>
              {submitted && clientValidationUsername() && (
                <ErrorMessage>* {clientValidationUsername()}</ErrorMessage>
              )}

              {usernameError == "Username already taken" && (
                <ErrorMessage>* Nome de usuário já cadastrado</ErrorMessage>
              )}

              {submitted && clientValidationEmail() && (
                <ErrorMessage>* {clientValidationEmail()}</ErrorMessage>
              )}

              {emailError == "The email format is invalid" && (
                <ErrorMessage>* Formato de e-mail inválido</ErrorMessage>
              )}

              {clientValidationBirthDate() && (
                <ErrorMessage>* {clientValidationBirthDate()}</ErrorMessage>
              )}

              {submitted && clientValidationPassword() && (
                <ErrorMessage>* {clientValidationPassword()}</ErrorMessage>
              )}

              {passwordError ==
                "Password must be at least 8 characters long" && (
                <ErrorMessage>
                  * A senha deve ter no mínimo 8 caracteres
                </ErrorMessage>
              )}
            </ErrorMessagesContainer>
            <SubmitButton onClick={handleCadastro}>Cadastrar</SubmitButton>
          </CadastroFormContainer>
        </CadastroConteiner>
      </CadastroWrapper>
    </>
  );
}
