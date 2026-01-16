// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { Bubbler_One } from "next/font/google";
// import SessionProviderWrapper from "./components/SessionProviderWrapper";

// const bubblerOne = Bubbler_One({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-bubbler-one",
// });

// export const metadata = {
//   title: "MyApp",
//   description: "Next.js simple landing page project",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${bubblerOne.variable} font-sans antialiased bg-white text-black`}>
//         <SessionProviderWrapper>
//           <div className="flex flex-col min-h-screen">
//             <Navbar />
//             <main className="flex-grow">{children}</main>
//             <Footer />
//           </div>
//         </SessionProviderWrapper>
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Bubbler_One } from "next/font/google";
import SessionProviderWrapper from "./components/SessionProviderWrapper";
import { Toaster } from "react-hot-toast"; // ১. টোস্টার ইমপোর্ট করুন

const bubblerOne = Bubbler_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bubbler-one",
});

export const metadata = {
  title: "MyApp | Secure Login",
  description: "Next.js simple landing page project with authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bubblerOne.variable} font-sans antialiased bg-white text-black`}>
        {/* ২. SessionProviderWrapper দিয়ে পুরো অ্যাপ মুড়িয়ে দিন */}
        <SessionProviderWrapper>

          {/* ৩. Toaster যোগ করুন যাতে যেকোনো জায়গা থেকে নোটিফিকেশন দেখা যায় */}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
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