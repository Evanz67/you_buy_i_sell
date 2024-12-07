"use client";
import { useUserAuth } from "./auth-context.js";
import { Main } from "../ui/main.js";

export function Authenticate() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function signIn() {
      try {
          await gitHubSignIn();
      } catch(e) {
          console.log(e);
      }
    }

    async function logout() {
      try {
          await firebaseSignOut();
      } catch(e) {
          console.log(e);
      }
    }

    return (
      <div>
        <Main signIn={signIn} user={user} logout={logout} />         
      </div>
    );

}