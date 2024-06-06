import Header from "@/components/layouts/dashboard/Header";
import SideBar from "@/components/layouts/dashboard/SideBar";
import { authServiceHandler } from "@/services/auth.service";
import { BaseService } from "@/services/base.service";
import { cookies } from "next/headers";

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // const token = cookies().get("token")?.value;
  // token && BaseService.setToken(token);
  // const profile = await authServiceHandler.getProfile();
  // console.log(profile.data);
  
  return (
    <>
      <div className="flex h-screen bg-milky">
        <div className="w-1/6">
          <SideBar />
        </div>
        <div className="flex w-5/6 flex-col overflow-y-auto">
          <Header />
          <div className="container mx-auto h-full px-8 py-6">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
