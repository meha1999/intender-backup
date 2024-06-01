"use client";
import OtpInputComponent from "react-otp-input";
import { Controller } from "react-hook-form";

interface OtpInputProps {
  label?: string;
  control: any;
  name: string;
}

const OtpInput = (props: OtpInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {props.label && (
        <span className="pr-1 text-sm text-common">{props.label}</span>
      )}
      <Controller
        control={props.control}
        name={props.name}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <OtpInputComponent
            containerStyle={{ width: "100%", gap: "6px", direction: "ltr" }}
            value={value}
            onChange={onChange}
            numInputs={6}
            renderSeparator={<span> </span>}
            skipDefaultStyles
            inputType="number"
            renderInput={(props) => (
              <input
                {...props}
                type="number"
                className="w-full rounded-xl border border-secondary bg-white py-1.5 text-center text-brand"
              />
            )}
          />
        )}
      />
    </div>
  );
};

export default OtpInput;
