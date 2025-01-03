"use client";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import toast from "react-hot-toast";
import { auth } from "@/lib/firestore/firebase";

export default function Page() {
  return (
    <main className="w-full flex justify-center items-center h-screen bg-gray-300 md:p-24 p-10 min-h-screen">
      <section className=" flex flex-col gap-3 ">
        <div className="flex justify-center">
          <img className="h-12" src="/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col gap-2 bg-white md:p-10 p-5 rounded-lg shadow-lg md:min-w-[400px] w-full">
          <h1 className="font-bold text-xl">Login With Email</h1>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              id="user-email"
              name="user-email"
              className=" px-3 py-2 rounded-xl border focus:outline-none w-full"
            />
            <input
              type="password"
              placeholder="Password"
              id="user-password"
              name="user-password"
              className="px-3 py-2 rounded-xl border focus:outline-none w-full"
            />
            <Button color="primary">Login</Button>
          </form>
          <div className="flex Justify-between gap-14">
            <Link href={"/sign-up"}>
              <button className="font-semibold text-sm text-blue-700">
                New? Create an Account
              </button>
            </Link>
            <Link href={"/forget-password"}>
              <button className="font-semibold text-sm text-blue-700">
                Forget Password?
              </button>
            </Link>
          </div>
          <hr />
          <SignInWithGoogleComponent />
        </div>
      </section>
    </main>
  );
}

function SignInWithGoogleComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const user = await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      toast.error(error.message || "failed to login with google");
    }
    setIsLoading(false);
  };
  return (
    <Button isLoading={isLoading} isDisabled={isLoading} onPress={handleLogin}>
      Sign in with Google
    </Button>
  );
}
