import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Bubbler_One } from "next/font/google";
import SessionProviderWrapper from "./components/SessionProviderWrapper";
import { Toaster } from "react-hot-toast";

const bubblerOne = Bubbler_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bubbler-one",
});

export const metadata = {
  title: "MyApp | Premium Platform",
  description: "Next.js simple landing page project with secure authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bubblerOne.variable} font-sans antialiased bg-[#F9FAFB] text-slate-900`}>

        <SessionProviderWrapper>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 4000,
            }}
          />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}