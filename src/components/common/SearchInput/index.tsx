import { UseFormRegisterReturn } from "react-hook-form";
interface SearchInputProps {
  Icon?: React.ReactNode;
  placeHolder?: string;
  label?: string;
  hookFormProps?: UseFormRegisterReturn<string>;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  Icon,
  placeHolder,
  label,
  hookFormProps,
  className,
}) => {
  return (
    <div
      className={
        `flex w-full items-center justify-between rounded-3xl bg-white px-2.5 ` +
        className
      }
    >
      <input
        type="text"
        className={
          `placeholder:text-text-base h-12 w-full rounded-3xl border-none bg-white text-base font-medium text-primary placeholder:font-semibold placeholder:text-primary focus:border-none focus:outline-none focus:ring-0 ` +
          className
        }
        placeholder={placeHolder}
        {...hookFormProps}
      />
      {Icon}
    </div>
  );
};

export default SearchInput;
