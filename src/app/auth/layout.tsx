import Image from "next/image";
import Banner from "public/images/auth/banner.png";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-full items-center justify-center bg-white py-6">
      <div className="flex h-full w-2/3 gap-9 rounded-3xl p-9 shadow-auth">
        <div className=" w-5/12">{children}</div>
        <div className="w-7/12 rounded-3xl bg-primary">
          <Image src={Banner} alt="" className="!relative h-full" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
