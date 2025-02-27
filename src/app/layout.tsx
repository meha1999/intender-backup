import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import NextTopLoader from "nextjs-toploader";
import Providers from "@/components/layouts/Provider";
import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intender",
  description: "Generated by intender",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/icons/favIcon.svg" sizes="any" />
      </head>
      <body className={inter.className + " h-screen"}>
        <Providers>
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
                  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={16000}
            showAtBottom={false}
          />
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <div id="portal" />
        </Providers>
      </body>
    </html>
  );
}
