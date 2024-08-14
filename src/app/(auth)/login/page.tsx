import LoginForm from "@/app/(auth)/login/login-form";
import React from "react";

export default function Login() {
  return (
    <div className="px-12 py-6">
      <h1 className="text-xl font-semibold text-center">Login</h1>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
