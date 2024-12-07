"use client";
import { AuthContextProvider } from "./utility/auth-context.js";
import { Authenticate } from "./utility/authentication.js";

export default function Home() {
  return (
    <AuthContextProvider>
      <Authenticate />
    </AuthContextProvider>
  );
}
