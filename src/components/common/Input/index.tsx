import { UseFormRegisterReturn } from "react-hook-form";
import { IconType } from "react-icons";
interface InputProps {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>> | IconType;
  placeHolder?: string;
  label?: string;
  hookFormProps?: UseFormRegisterReturn<string>;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  Icon,
  placeHolder,
  label,
  hookFormProps,
  className,
}) => {
  return (
    <div
      className={
        `flex w-full items-center justify-between rounded-2xl ${className ? className : "bg-milky"} px-4 max-3xl:rounded-xl` +
        className
      }
    >
      <input
        type="text"
        className="placeholder:text-common-dark h-12 w-full rounded-xl border-none bg-transparent text-sm font-medium text-black placeholder:text-sm placeholder:font-medium focus:border-none focus:outline-none focus:ring-0 max-3xl:h-10 "
        placeholder={placeHolder}
        {...hookFormProps}
      />
      {Icon && (
        <div className="pr-3">
          <Icon />
        </div>
      )}
    </div>
  );
};

export default Input;
