"use client";
import { useState } from "react";
import ConfirmOtp from "@/components/pages/auth/register/ConfirmOtp";
import Signup from "@/components/pages/auth/register/Signup";

const Register = () => {
  const [verificationToken, setVerificationToken] = useState("");

  return verificationToken ? (
    <ConfirmOtp verificationToken={verificationToken} />
  ) : (
    <Signup setVerificationToken={setVerificationToken} />
  );
};

export default Register;
