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

// const BasicInformation: React.FC<StepperComponentsProps> = ({
//   setActiveTab,
// }) => {
//   const {
//     setBasicInfo,
//     setConfigs,
//     configs,
//     tags,
//     setTags,
//     services,
//     setServices,
//   } = useZustandStore();

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<InputType>();

//   const handleSubmitBasicInfo: SubmitHandler<InputType> = async (data) => {
//     // setBasicInfo(data);
//     const finalData = {
//       ...data,
//       company_type: data.company_type.value,
//       tags: [data.tags.value],
//       services: [data.services.value],
//       province: data.province.value,
//     };
//     const res = await authServiceHandler.signupCompany(finalData);
//     console.log(res);
//     toast.success("ثبت شرکت با موفقیت انجام شد");
//     setActiveTab(1);
//   };

//   const handleGetConfigs = async () => {
//     const res = await authServiceHandler.getConfigs();
//     setConfigs(res.data);
//   };

//   const handleGetTags = async () => {
//     const res = await authServiceHandler.getTags();
//     setTags(res.data);
//   };

//   const handleGetServices = async () => {
//     const res = await authServiceHandler.getServices();
//     setServices(res.data);
//   };

//   useEffect(() => {
//     handleGetConfigs();
//     handleGetTags();
//     handleGetServices();
//   }, []);

//   return (
//     <form
//       className="flex w-full flex-col gap-9"
//       onSubmit={handleSubmit(handleSubmitBasicInfo)}
//     >
//       <div className="flex items-center gap-8">
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"نام شرکت"}</p>
//           <Input
//             placeHolder="نام شرکت"
//             hookFormProps={register("name", {
//               required: {
//                 value: true,
//                 message: "نام شرکت اجباری میباشد.",
//               },
//             })}
//           />
//           <HookFormErrorHandler errors={errors} name="name" />
//         </div>
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"نام انگلیسی شرکت"}</p>
//           <Input
//             placeHolder="نام انگلیسی شرکت"
//             hookFormProps={register("name_en", {
//               required: {
//                 value: true,
//                 message: "نام انگلیسی شرکت اجباری میباشد.",
//               },
//             })}
//           />
//           <HookFormErrorHandler errors={errors} name="name_en" />
//         </div>
//       </div>
//       <div className="flex items-center gap-8">
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"نام برند"}</p>
//           <Input
//             placeHolder="نام برند"
//             hookFormProps={register("brand_name", {
//               required: { value: true, message: "نام برند اجباری میباشد." },
//             })}
//           />
//           <HookFormErrorHandler errors={errors} name="brand_name" />
//         </div>
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"نام انگلیسی برند"}</p>
//           <Input
//             placeHolder="نام انگلیسی برند"
//             hookFormProps={register("brand_name_en", {
//               required: {
//                 value: true,
//                 message: "نام انگلیسی برند اجباری میباشد.",
//               },
//             })}
//           />
//           <HookFormErrorHandler errors={errors} name="brand_name_en" />
//         </div>
//       </div>
//       <div className="flex items-center gap-8">
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"شماره ثبت شرکت"}</p>
//           <Input
//             placeHolder="شماره ثبت شرکت"
//             hookFormProps={register("registration_number", {
//               required: {
//                 value: true,
//                 message: "شماره ثبت شرکت اجباری میباشد.",
//               },
//             })}
//           />
//           <HookFormErrorHandler errors={errors} name="registration_number" />
//         </div>
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"تاریخ شروع فعالیت"}</p>
//           <Input
//             placeHolder="تاریخ شروع فعالیت"
//             hookFormProps={register("from_date", {
//               required: {
//                 value: true,
//                 message: "تاریخ شروع فعالیت اجباری میباشد.",
//               },
//             })}
//           />
//           <HookFormErrorHandler errors={errors} name="from_date" />
//         </div>
//       </div>
//       <div className="flex items-center gap-8">
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"نوع شرکت"}</p>
//           {configs?.company_type && (
//             <Controller
//               control={control}
//               name="company_type"
//               render={({ field: { onChange, value, ref } }) => (
//                 <SelectInput
//                   data={Object?.keys(configs?.company_type).map((item) => {
//                     return { text: configs.company_type[item], value: item };
//                   })}
//                   placeholder="نوع شرکت"
//                   value={value}
//                   setValue={onChange}
//                 />
//               )}
//             />
//           )}
//           <HookFormErrorHandler errors={errors} name="company_type" />
//         </div>
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"استان"}</p>
//           {configs?.province && (
//             <Controller
//               control={control}
//               name="province"
//               render={({ field: { onChange, value, ref } }) => (
//                 <SelectInput
//                   data={Object?.keys(configs?.province).map((item) => {
//                     return { text: configs.province[item], value: item };
//                   })}
//                   placeholder="استان"
//                   value={value}
//                   setValue={onChange}
//                 />
//               )}
//             />
//           )}
//           <HookFormErrorHandler errors={errors} name="province" />
//         </div>
//       </div>
//       <div className="flex items-center gap-8">
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"شماره تلفن ثابت"}</p>
//           <Input
//             placeHolder="شماره تلفن ثابت"
//             hookFormProps={register("phone", {
//               required: {
//                 value: true,
//                 message: "شماره تلفن ثابت اجباری میباشد.",
//               },
//             })}
//           />
//           <HookFormErrorHandler errors={errors} name="phone" />
//         </div>
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"پست الکترونیک"}</p>
//           <Input
//             placeHolder="پست الکترونیک"
//             hookFormProps={register("email", {
//               required: {
//                 value: true,
//                 message: "پست الکترونیک اجباری میباشد.",
//               },
//               pattern: {
//                 value: emailPattern,
//                 message: "فرمت ایمیل اشتباه میباشد",
//               },
//             })}
//           />
//           <HookFormErrorHandler errors={errors} name="email" />
//         </div>
//       </div>

//       <div className="flex items-center gap-8">
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"آدرس"}</p>
//           <Input
//             placeHolder="آدرس"
//             hookFormProps={register("address", {
//               required: {
//                 value: true,
//                 message: "آدرس اجباری میباشد.",
//               },
//             })}
//           />
//           <HookFormErrorHandler errors={errors} name="address" />
//         </div>
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"توضیحات"}</p>
//           <Input
//             placeHolder="توضیحات"
//             hookFormProps={register("description", {
//               required: {
//                 value: true,
//                 message: "توضیحات اجباری میباشد.",
//               },
//             })}
//           />
//           <HookFormErrorHandler errors={errors} name="description" />
//         </div>
//       </div>

//       <div className="flex items-center gap-8">
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"برچسب ها"}</p>
//           {tags && (
//             <Controller
//               control={control}
//               name="tags"
//               render={({ field: { onChange, value, ref } }) => (
//                 <SelectInput
//                   data={tags.map((item) => {
//                     return { text: item.name, value: item.id };
//                   })}
//                   placeholder="برچسب ها"
//                   value={value}
//                   setValue={onChange}
//                 />
//               )}
//             />
//           )}
//           <HookFormErrorHandler errors={errors} name="tags" />
//         </div>
//         <div className="flex w-full flex-col gap-2.5">
//           <p className="text-sm font-bold text-black">{"سرویس ها"}</p>
//           {services && (
//             <Controller
//               control={control}
//               name="services"
//               render={({ field: { onChange, value, ref } }) => (
//                 <SelectInput
//                   data={services.map((item) => {
//                     return { text: item.name, value: item.id };
//                   })}
//                   placeholder="سرویس ها"
//                   value={value}
//                   setValue={onChange}
//                 />
//               )}
//             />
//           )}
//           <HookFormErrorHandler errors={errors} name="services" />
//         </div>
//       </div>
//       <Button className="rounded-xl border border-brand bg-brand py-2 text-sm font-bold text-white hover:bg-white hover:text-brand">
//         {"مرحله بعد"}
//       </Button>
//     </form>
//   );
// };

// const Documents: React.FC<StepperComponentsProps> = ({ setActiveTab }) => {
//   return (
//     <div className="flex w-full flex-col gap-5">
//       <div className="flex flex-col gap-1">
//         <p className="text-sm font-bold text-black">{"آگهی تاسیس شرکت"}</p>
//         <div className="flex h-[150px] w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-weeny bg-light-weeny text-sm font-semibold text-weeny">
//           <LuUploadCloud className="text-xl" />
//           {"آپلود آگهی"}
//         </div>
//       </div>
//       <div className="flex flex-col gap-1">
//         <p className="text-sm font-bold text-black">{"پروژه های انجام شده"}</p>
//         <div className="flex h-[150px] w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-weeny bg-light-weeny text-sm font-semibold text-weeny">
//           <LuUploadCloud className="text-xl" />
//           {"آپلود نمونه کار"}
//         </div>
//       </div>
//       <div className="flex flex-col gap-1">
//         <p className="text-sm font-bold text-black">{"رضایت نامه مشتری"}</p>
//         <div className="flex h-[150px] w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-weeny bg-light-weeny text-sm font-semibold text-weeny">
//           <LuUploadCloud className="text-xl" />
//           {"آپلود رضایت نامه"}
//         </div>
//       </div>
//       <div className="flex items-center gap-4">
//         <Button
//           onClick={() => setActiveTab(0)}
//           className="w-full rounded-xl border border-brand bg-white py-2 text-sm font-bold text-brand hover:bg-brand hover:text-white"
//         >
//           {"مرحله قبل"}
//         </Button>
//         <Button
//           onClick={() => setActiveTab(2)}
//           className="w-full rounded-xl border border-brand bg-brand py-2 text-sm font-bold text-white hover:bg-white hover:text-brand"
//         >
//           {"مرحله بعد"}
//         </Button>
//       </div>
//     </div>
//   );
// };

// const Certificates: React.FC<StepperComponentsProps> = ({ setActiveTab }) => {
//   return <div className="flex w-full flex-col gap-9"></div>;
// };

const CompanyRegister = () => {
  const [actvieTab, setActiveTab] = useState(0);

  const steps = [
    <GeneralInfo key="general" setActiveTab={setActiveTab} />,
    <ProfessionalInfo key="professional"  />,
  ];

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <p className="text-3xl font-bold">{"ثبت شرکت"}</p>
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
