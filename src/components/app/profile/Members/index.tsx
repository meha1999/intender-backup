"use client";

import Input from "@/components/common/Input";
import SelectInput from "@/components/common/SelectInput";
import { authServiceHandler } from "@/services/auth.service";
import { companyServiceHandler } from "@/services/company.service";
import { useZustandStore } from "@/store";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import { Spinner } from "@nextui-org/spinner";
import { Button } from "@nextui-org/button";
import { FaRegCheckSquare } from "react-icons/fa";
import errorHandler from "@/utils/errorHandler";

type Inputs = {
  first_name: string;
  last_name: string;
  mobile: string;
  email: String;
  access_level: { text: string; value: string };
  decipline: { text: string; value: string };
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
  const [loading, setLoading] = useState<boolean>(false);
  const [addUserLoading, setAddUserLoading] = useState(false);

  const handleAddMember: SubmitHandler<Inputs> = async (data) => {
    setAddUserLoading(true);
    try {
      await companyServiceHandler.addMember({
        ...data,
        access_level: data.access_level.value,
        decipline: data.decipline.value,
      });
      await handleGetMembers();
      toast.success("کاربر با موفقیت اضافه شد.");
    } catch (error) {
      errorHandler(error);
    }
    setAddUserLoading(false);
  };

  const handleGetConfigs = async () => {
    const res = await authServiceHandler.getConfigs();
    setConfigs(res.data);
  };

  const handleGetMembers = async () => {
    const res = await companyServiceHandler.getMembers();
    setMembers(res.data);
  };

  const handleUserStatus = async (id: number, is_active: boolean) => {
    setLoading(true);
    try {
      await companyServiceHandler.editMember(id, { is_active });
      await handleGetMembers();
      toast.success("وضعیت کاربر با موفقیت برزوزرسانی شد.");
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetConfigs();
    handleGetMembers();
  }, []);

  return (
    <div className="flex w-full flex-col gap-2">
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
              {configs?.decipline && (
                <Controller
                  control={control}
                  name="decipline"
                  render={({ field: { onChange, value, ref } }) => (
                    <SelectInput
                      data={Object?.keys(configs?.decipline).map((item) => {
                        return { text: configs.decipline[item], value: item };
                      })}
                      placeholder="نوع کاربر"
                      value={value}
                      setValue={onChange}
                    />
                  )}
                />
              )}
              <HookFormErrorHandler errors={errors} name="decipline" />
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
          <Button
            size="md"
            radius="full"
            type="submit"
            isLoading={addUserLoading}
            className="w-full rounded-3xl bg-light-brand py-2.5 text-center text-brand hover:bg-brand hover:text-light-brand"
          >
            {"افزودن"}
          </Button>
        </form>
        <div className="flex flex-col gap-2.5">
          {members.map((item) => (
            <div
              className="flex cursor-pointer items-center justify-between rounded-3xl bg-white px-6 py-4 text-2xl"
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
                <p>{item.decipline}</p>
              </div>
              <div className="flex flex-col justify-center text-sm text-black">
                <p>{item.access_level}</p>
              </div>
              {loading ? (
                <Spinner />
              ) : item.is_active ? (
                <MdDeleteForever
                  onClick={() => handleUserStatus(item.id, !item.is_active)}
                  className="text-red-600"
                />
              ) : (
                <FaRegCheckSquare
                  onClick={() => handleUserStatus(item.id, !item.is_active)}
                  className="text-green-600"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
