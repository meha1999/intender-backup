const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-full flex-col bg-auth bg-cover bg-left-bottom bg-no-repeat">
      <div className="min-h-[67%] w-4/6 max-xl:w-5/6 rounded-bl-[350px] bg-primary py-16 pl-36 pr-20">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
