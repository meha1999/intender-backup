import { UseFormRegisterReturn } from "react-hook-form";
import { IconType } from "react-icons";
interface TextAreaProps {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>> | IconType;
  placeHolder?: string;
  label?: string;
  hookFormProps?: UseFormRegisterReturn<string>;
}

const TextArea: React.FC<TextAreaProps> = ({
  Icon,
  placeHolder,
  label,
  hookFormProps,
}) => {
  return (
    <div className=" flex w-full items-start  justify-between rounded-2xl bg-common-light px-4">
      <textarea
        rows={5}
        className=" w-full rounded-xl border-none bg-transparent text-sm font-medium text-black placeholder:text-sm placeholder:font-medium placeholder:text-common-dark focus:border-none focus:outline-none focus:ring-0 "
        placeholder={placeHolder}
        {...hookFormProps}
      />
      {Icon && (
        <div className="pr-3 pt-3">
          <Icon />
        </div>
      )}
    </div>
  );
};

export default TextArea;
