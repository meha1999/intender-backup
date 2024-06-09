"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SelectInput from "@/components/common/SelectInput";
import { authServiceHandler } from "@/services/auth.service";
import { companyServiceHandler } from "@/services/company.service";
import { useZustandStore } from "@/store";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";

type Inputs = {
  first_name: string;
  last_name: string;
  mobile: string;
  email: String;
  access_level: { text: string; value: string };
  user_type: { text: string; value: string };
  position: string;
};

const Members = () => {
  const {
    setConfigs,
    configs,
    userProfile: { company },
  } = useZustandStore();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const [members, setMembers] = useState<Array<CompanyMember>>([]);

  const handleAddMember: SubmitHandler<Inputs> = async (data) => {
    await companyServiceHandler.addMember({
      ...data,
      access_level: data.access_level.value,
      user_type: data.user_type.value,
    });
    handleGetMembers();
  };

  const handleGetConfigs = async () => {
    const res = await authServiceHandler.getConfigs();
    setConfigs(res.data);
  };

  const handleGetMembers = async () => {
    const res = await companyServiceHandler.getMembers();
    setMembers(res.data);
  };

  useEffect(() => {
    handleGetConfigs();
    handleGetMembers();
  }, []);

  return (
    <div className="flex w-1/2 flex-col gap-2">
      <p className="font-bold text-brand">{"اعضا"}</p>
      <div className="flex flex-col gap-4 rounded-xl bg-milky px-6 py-4">
        <form
          onSubmit={handleSubmit(handleAddMember)}
          className="flex w-full flex-col gap-4"
        >
          <div className="flex gap-2">
            <div className="flex w-full flex-col gap-2.5">
              <Input
                placeHolder="نام"
                className="bg-white"
                hookFormProps={register("first_name", {
                  required: {
                    value: true,
                    message: "نام اجباری میباشد.",
                  },
                })}
              />
              <HookFormErrorHandler errors={errors} name="first_name" />
            </div>
            <div className="flex w-full flex-col gap-2.5">
              <Input
                placeHolder="نام خانوادگی "
                className="bg-white"
                hookFormProps={register("last_name", {
                  required: {
                    value: true,
                    message: "نام خانوادگی اجباری میباشد.",
                  },
                })}
              />
              <HookFormErrorHandler errors={errors} name="last_name" />
            </div>
            <div className="flex w-full flex-col gap-2.5">
              <Input
                placeHolder="شماره تلفن"
                className="bg-white"
                hookFormProps={register("mobile", {
                  required: {
                    value: true,
                    message: "شماره تلفن اجباری میباشد.",
                  },
                })}
              />
              <HookFormErrorHandler errors={errors} name="mobile" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex w-full flex-col gap-2.5">
              {configs?.access_level && (
                <Controller
                  control={control}
                  name="access_level"
                  render={({ field: { onChange, value, ref } }) => (
                    <SelectInput
                      data={Object?.keys(configs?.access_level).map((item) => {
                        return {
                          text: configs.access_level[item],
                          value: item,
                        };
                      })}
                      placeholder="سطح دسترسی"
                      value={value}
                      setValue={onChange}
                    />
                  )}
                />
              )}
              <HookFormErrorHandler errors={errors} name="access_level" />
            </div>
            <div className="flex w-full flex-col gap-2.5">
              {configs?.user_type && (
                <Controller
                  control={control}
                  name="user_type"
                  render={({ field: { onChange, value, ref } }) => (
                    <SelectInput
                      data={Object?.keys(configs?.user_type).map((item) => {
                        return { text: configs.user_type[item], value: item };
                      })}
                      placeholder="نوع کاربر"
                      value={value}
                      setValue={onChange}
                    />
                  )}
                />
              )}
              <HookFormErrorHandler errors={errors} name="user_type" />
            </div>
            <div className="flex w-full flex-col gap-2.5">
              <Input
                placeHolder="سمت"
                className="bg-white"
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
          <Button className="w-full rounded-3xl bg-light-brand py-2.5 text-center text-brand hover:bg-brand hover:text-light-brand">
            {"افزودن"}
          </Button>
        </form>
        <div className="flex flex-col gap-2.5">
          {members.map((item) => (
            <div
              className="flex justify-between rounded-3xl bg-white px-6 py-4"
              key={item.id}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-weeny">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">
                  <CiUser className="text-2xl" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-between text-sm text-black">
                <p>
                  {item.first_name} {item.last_name}
                </p>
                <p>{item.position}</p>
              </div>
              <div className="flex flex-col items-center justify-between text-sm text-black">
                <p>{item.mobile}</p>
                <p>{item.user_type}</p>
              </div>
              <div className="flex flex-col justify-center text-sm text-black">
                <p>{item.access_level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
