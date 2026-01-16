import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Bubbler_One } from "next/font/google";

const bubblerOne = Bubbler_One({
  subsets: ["latin"],
  variable: "--font-bubbler-one",
  weight: "400",
});

export const metadata = {
  title: "MyApp",
  description: "Next.js simple landing page project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bubblerOne.variable} antialiased`}>
        {/* Layout wrapper */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
