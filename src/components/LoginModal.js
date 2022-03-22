import { useAuth, login, logout } from "../firebase.config";
import { signInWithGoogle } from "../firebase.config";
import { useRef, useState } from "react";
import { auth } from "../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Layout from "../components/Layout";

export default function LoginModal() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Layout>
        <div className="w-1/2 m-auto pt-24">
          <div className="text-white">
            Vous êtes actuellement connecté en tant que : {currentUser?.email}
          </div>
          <div>
            {" "}
            <input
              ref={emailRef}
              className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
            ></input>
            <input
              ref={passwordRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="flex m-auto justify-around pt-12">
            <button
              disabled={loading}
              onClick={handleLogin}
              className="text-center text-xl border-yellow-500 border-2 pl-4 pr-4 pt-2 pb-2 text-white rounded-md hover:bg-yellow-500"
            >
              Log In
            </button>
            <br></br>
            <button
              disabled={loading}
              onClick={handleLogout}
              className="text-center text-xl border-yellow-500 border-2 pl-4 pr-4 pt-2 pb-2 text-white rounded-md hover:bg-yellow-500"
            >
              Log Out
            </button>
            <br></br>
            <button
              onClick={signInWithGoogle}
              className="text-center text-xl border-yellow-500 border-2 pl-4 pr-4 pt-2 pb-2 text-white rounded-md hover:bg-yellow-500"
            >
              GOOGLE
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}
