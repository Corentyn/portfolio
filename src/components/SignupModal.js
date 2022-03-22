import { signup, useAuth, logout, login } from "../firebase.config";
import { useRef, useState } from "react";
import Layout from "./Layout";

export default function SignupModal() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handlerSignup() {
    setLoading(true);
    try {
      signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Un compte est déjà créé avec cet email!");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <>
      <Layout>
        <div className="w-1/2 m-auto pt-24">
          <div id="fields">
            <input
              ref={emailRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              placeholder="Email"
            ></input>
            <input
              ref={passwordRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              type="password"
              placeholder="Password"
            ></input>
            <div className="flex m-auto justify-around pt-12">
              <button
                disabled={loading || currentUser}
                onClick={handlerSignup}
                className="text-center text-xl border-yellow-500 border-2 pl-4 pr-4 pt-2 pb-2 text-white rounded-md hover:bg-yellow-500"
              >
                Sign Up
              </button>
            </div>
            <br></br>
          </div>
        </div>
      </Layout>
    </>
  );
}
