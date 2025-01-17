"use client";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import toast from "react-hot-toast";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function Page() {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);
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
              placeholder="Enter your Email"
              id="user-email"
              name="user-email"
              className=" px-3 py-2 rounded-xl border focus:outline-none w-full"
            />
            <input
              type="password"
              placeholder="Enter your Password"
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
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
          fill="#4285F4"
        />
        <path
          d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
          fill="#34A853"
        />
        <path
          d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
          fill="#FBBC05"
        />
        <path
          d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
          fill="#EA4335"
        />
      </svg>
      Sign in with Google
    </Button>
  );
}
