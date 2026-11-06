import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TanstackProvider from "./components/TanstackProvider/TanstackProvider";

const geInter = Inter({
  subsets: ["latin",],
  weight: ["400", "500", "600"],
  variable: "--font-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-Pharmacy",
  description: "E-Pharmacy — online pharmacy where you can find medicines, healthcare products, and order them conveniently online.",
  icons:{
    icon: "/favicon.png?v=2"
  }
};

type LayoutProps = {
  children: React.ReactNode;
  modal?: React.ReactNode;
}

export default function RootLayout({ children, modal }: LayoutProps) {
  return (
    <html lang="en" className={`${geInter.variable}`}>
      <body>
        <TanstackProvider> 
          <Header/>
            <main>
              {children}
              {modal}
            </main>
          <Footer/>
        </TanstackProvider>
      </body>
    </html>
  );
}
