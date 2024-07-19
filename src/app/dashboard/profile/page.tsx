"use client";
import Input from "@/components/common/Input";
import PasswordInput from "@/components/common/PasswordInput";
import ChangePassword from "@/components/app/dashboard/changePassword";
import { passwordPattern } from "@/configs/regex";
import { authServiceHandler } from "@/services/auth.service";
import { useZustandStore } from "@/store";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuFileEdit } from "react-icons/lu";
import { toast } from "react-toastify";

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  position: string;
};

const Profile = () => {
  const { userProfile, setUserProfile } = useZustandStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ values: userProfile });
  const [loading, setLoading] = useState(false);

  const handleEdit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      await authServiceHandler.editUser(data);
      const res = await authServiceHandler.getProfile();
      setUserProfile(res.data);
      toast.success("با موفقیت بروزرسانی شد.");
    } catch (error) {
      toast.error("خطای سرور");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <form
        onSubmit={handleSubmit(handleEdit)}
        className="flex flex-col gap-10 rounded-3xl bg-white p-11"
      >
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-brand p-1">
            <div className="h-16 w-16 rounded-full bg-brand"></div>
          </div>
          <p className="text-lg font-bold text-brand">{`${userProfile.first_name} عزیز به پنل کاربری خود خوش آمدید! `}</p>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex w-1/2 items-center gap-4">
            <p className="w-16 text-nowrap text-sm font-bold text-black">
              {"نام"}
            </p>
            <div className="flex w-full flex-col gap-2.5">
              <Input
                placeHolder="نام "
                hookFormProps={register("first_name", {
                  required: {
                    value: true,
                    message: "نام اجباری میباشد.",
                  },
                })}
              />
              <HookFormErrorHandler errors={errors} name="first_name" />
            </div>
          </div>
          <div className="flex w-1/2 items-center gap-4">
            <p className="w-16 text-nowrap text-sm font-bold text-black">
              {"نام خانوادگی"}
            </p>
            <div className="flex w-full flex-col gap-2.5">
              <Input
                placeHolder="نام خانوادگی"
                hookFormProps={register("last_name", {
                  required: {
                    value: true,
                    message: "نام خانوادگی اجباری میباشد.",
                  },
                })}
              />
              <HookFormErrorHandler errors={errors} name="last_name" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex w-1/2 items-center gap-4">
            <p className="w-16 text-nowrap text-sm font-bold text-black">
              {"موبایل"}
            </p>
            <div className="flex w-full flex-col gap-2.5 text-black">
              <div>{userProfile.mobile}</div>
              <HookFormErrorHandler errors={errors} name="mobile" />
            </div>
          </div>
          <div className="flex w-1/2 items-center gap-4">
            <p className="w-16 text-nowrap text-sm font-bold text-black">
              {"ایمیل"}
            </p>
            <div className="flex w-full flex-col gap-2.5">
              <Input
                placeHolder="ایمیل"
                hookFormProps={register("email", {
                  required: {
                    value: true,
                    message: "ایمیل اجباری میباشد.",
                  },
                })}
              />
              <HookFormErrorHandler errors={errors} name="email" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex w-1/2 items-center gap-4">
            <p className="w-16 text-nowrap text-sm font-bold text-black">
              {"سمت"}
            </p>
            <div className="flex w-full flex-col gap-2.5">
              <Input
                placeHolder="سمت"
                hookFormProps={register("position", {
                  required: {
                    value: true,
                    message: "سمت اجباری میباشد.",
                  },
                })}
              />
              <HookFormErrorHandler errors={errors} name="position" />
            </div>
          </div>
          <Button
            size="md"
            radius="full"
            type="submit"
            className="w-1/2 rounded-2xl border border-weeny bg-weeny !py-2.5 px-20 text-sm font-bold text-white hover:bg-white hover:text-weeny"
            isLoading={loading}
          >
            <LuFileEdit className="h-4 w-4" />
            {"ویرایش اطلاعات"}
          </Button>
        </div>
      </form>
      <ChangePassword />
    </div>
  );
};

export default Profile;
