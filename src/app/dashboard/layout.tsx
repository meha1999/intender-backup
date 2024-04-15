import Header from "@/components/layouts/dashboard/Header";
import SideBar from "@/components/layouts/dashboard/SideBar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
      <div id="portal" />
    </>
  );
};

export default DashboardLayout;
