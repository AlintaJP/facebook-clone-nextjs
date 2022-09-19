import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
        height={400}
        width={400}
        objectFit="contain"
        alt="google logo"
      />
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: "/",
          })
        }
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer text-xl"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
