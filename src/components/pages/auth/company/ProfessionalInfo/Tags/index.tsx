import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import HookFormErrorHandler from "@/utils/HookFormErrorHandler";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface InputType {
  name: string;
}
interface TagsProps {
  list: Array<{ name: string; id: number }>;
  onChange: (data: any) => void;
  selectedList: Array<string>;
}

const Tags: React.FC<TagsProps> = ({ list, onChange, selectedList }) => {
  const {
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm<InputType>();

  const [userTags, setUserTags] = useState<Array<string>>([]);

  const handleAddUserTags = () => {
    const name = watch("name");
    const tag = userTags.find((item) => item === name);
    !tag && setUserTags([name, ...userTags]);
    reset();
  };

  const handleUserTags = (name: string) => {
    const isActive = selectedList.includes(name);
    isActive
      ? onChange(selectedList.filter((item) => item != name))
      : onChange([...selectedList, name]);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-bold text-black">{"برچسب"}</p>
      <div className="flex w-full flex-col gap-3 rounded-xl bg-light-gray px-5 py-3">
        <div className="flex gap-4">
          <Input
            placeHolder="متن مورد نظر را وارد کنید...|"
            hookFormProps={register("name", {
              required: {
                value: true,
                message: "برچسب اجباری میباشد.",
              },
            })}
          />
          <HookFormErrorHandler errors={errors} name="name" />
          <Button
            type="button"
            onClick={handleAddUserTags}
            className="rounded-xl bg-light-brand p-3 text-sm font-bold text-brand"
          >
            {"افزودن"}
          </Button>
        </div>
        <div className="flex items-center gap-2 overflow-auto">
          {userTags.map((item) => (
            <div
              className={`cursor-pointer rounded-xl px-2.5 py-1 text-sm ${selectedList?.includes(item) ? "bg-weeny text-white" : "bg-light-weeny text-weeny"}`}
              key={item}
              onClick={() => handleUserTags(item)}
            >
              {item}
            </div>
          ))}
          {list.map((item) => (
            <div
              className={`cursor-pointer rounded-xl px-2.5 py-1 text-sm ${selectedList?.includes(item.name) ? "bg-weeny text-white" : "bg-light-weeny text-weeny"}`}
              key={item.id}
              onClick={() => handleUserTags(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
