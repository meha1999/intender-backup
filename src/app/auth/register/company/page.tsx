"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SelectInput from "@/components/common/SelectInput";
import GeneralInfo from "@/components/pages/auth/company/GeneralInfo";
import ProfessionalInfo from "@/components/pages/auth/company/ProfessionalInfo";
import { emailPattern } from "@/configs/regex";
import { authServiceHandler } from "@/services/auth.service";
import { useZustandStore } from "@/store";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LuUploadCloud } from "react-icons/lu";
import { toast } from "react-toastify";

interface StepperComponentsProps {
  setActiveTab: (value: number) => void;
}

interface InputType {
  name: string;
  name_en: string;
  brand_name: string;
  brand_name_en: string;
  registration_number: string;
  from_date: string;
  phone: string;
  company_type: { text: string; value: string };
  email: string;
  province: { text: string; value: string };
  address: string;
  description: string;
  is_foreigner: true;
  tags: { name: string; value: number };
  services: { name: string; value: number };
}

const CompanyRegister = () => {
  const [actvieTab, setActiveTab] = useState(0);

  const steps = [
    <GeneralInfo key="general" setActiveTab={setActiveTab} />,
    <ProfessionalInfo key="professional" />,
  ];

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <p className="text-3xl font-bold text-black">{"ثبت شرکت"}</p>
      <div className="flex w-full items-center gap-2">
        <div
          onClick={() => setActiveTab(0)}
          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border ${actvieTab >= 0 ? "border-brand bg-white" : "border-secondary-light bg-secondary-light"}`}
        >
          <div
            className={`h-6 w-6 rounded-full ${actvieTab >= 0 ? "bg-brand" : "bg-secondary-light"}`}
          />
        </div>
        <div
          className={`h-1 grow ${actvieTab > 0 ? "bg-brand" : "bg-secondary-light"}`}
        />
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border ${actvieTab >= 1 ? "border-brand bg-white" : "border-secondary-light bg-secondary-light"}`}
        >
          <div
            className={`h-6 w-6 rounded-full ${actvieTab >= 1 ? "bg-brand" : "bg-secondary-light"}`}
          />
        </div>
      </div>
      {steps[actvieTab]}
    </div>
  );
};

export default CompanyRegister;
