import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { CSSProperties, MouseEventHandler } from "react";

interface ButtonProps {
  href?: Url;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  form?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return props?.href ? (
    <Link href={props.href} style={props.style} className={props.className}>
      {props.children}
    </Link>
  ) : (
    <button
      form={props.form}
      type={props.type}
      onClick={props.onClick}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
