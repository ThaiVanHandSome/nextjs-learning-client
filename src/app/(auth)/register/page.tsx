import React from "react";
import RegisterForm from "@/app/(auth)/register/register-form";

export default function Register() {
  return (
    <div className="px-12 py-6">
      <h1 className="text-xl font-semibold text-center">Register</h1>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}
