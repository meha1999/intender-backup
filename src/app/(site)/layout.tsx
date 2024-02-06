import Footer from "@/components/layouts/site/Footer";
import Header from "@/components/layouts/site/Header";

const SiteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col bg-black">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default SiteLayout;
