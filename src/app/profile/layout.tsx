import Finance from "@/components/layouts/profile/Finance";
import Header from "@/components/layouts/profile/Header";

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen flex-col bg-primary">
      <Header />
      <div className="flex">
        <div className="h-full w-2/3 rounded-tl-3xl bg-white">{children}</div>
        <Finance />
      </div>
    </div>
  );
};

export default ProfileLayout;
