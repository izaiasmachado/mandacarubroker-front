'use client'

import NavBar from "@/components/NavBar";
import MainGroup from "@/components/MainContainer";

export default function Home() {
  if (!localStorage.getItem('access_token')) {
    window.location.href = "/login";
  }
  return (
    <>
      <NavBar />
      <MainGroup />
    </>
  );
}