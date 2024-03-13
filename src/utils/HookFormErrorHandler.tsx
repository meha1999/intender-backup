import { FieldErrors } from "react-hook-form";
import { MdError } from "react-icons/md";

interface HookFormErrorHandlerProps {
  errors: FieldErrors<any>;
  name: string;
}

const defaultErrorMessages: any = {
  required: "این فیلد اجباری میباشد.",
  pattern: "فرمت درست را وارد نمایید.",
};

const HookFormErrorHandler: React.FC<HookFormErrorHandlerProps> = ({
  errors,
  name,
}) => {
  return (
    errors[name]&& <p className="flex items-center gap-2 text-xs text-brand " >
      <MdError />
      {errors[name]?.message
        ? errors[name]?.message
        : defaultErrorMessages[errors[name]?.types as unknown as string]
          ? defaultErrorMessages[errors[name]?.types as unknown as string]
          : "لطفا مقدار را به درستی وارد کنید"}
    </p>
  );
};

export default HookFormErrorHandler;
