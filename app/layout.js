import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { ThemeProvider } from "@/provider/ThemeProvider";
import AuthProvider from "@/provider/AuthProvider";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: "Sparticle Blog App",
  description: "An educational blog app built with Next.js and Prisma.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <NavBar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
