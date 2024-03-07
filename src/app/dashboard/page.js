"use client";

import NavBar from "@/components/NavBar";
import MainGroup from "@/components/MainContainer";

export default function Home() {
  if (
    typeof window !== "undefined" &&
    localStorage &&
    !localStorage.getItem("access_token")
  ) {
    window.location.href = "/";
    return <></>;
  }
  return (
    <>
      <NavBar />
      <MainGroup />
    </>
  );
}
