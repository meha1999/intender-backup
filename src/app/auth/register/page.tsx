"use client";
import { useState } from "react";
import ConfirmOtp from "@/components/app/auth/register/ConfirmOtp";
import Signup from "@/components/app/auth/register/Signup";

const Register = () => {
  const [verificationToken, setVerificationToken] = useState("");

  return verificationToken ? (
    <ConfirmOtp verificationToken={verificationToken} />
  ) : (
    <Signup setVerificationToken={setVerificationToken} />
  );
};

export default Register;
