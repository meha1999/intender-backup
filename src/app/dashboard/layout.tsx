import Header from "@/components/layouts/dashboard/Header";
import SideBar from "@/components/layouts/dashboard/SideBar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-full flex-col bg-primary p-9">
      <Header />
      <div className="flex h-full">
        <div className="w-1/6">
          <SideBar />
        </div>
        <div className="w-5/6 rounded-[60px] bg-white px-10 py-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
