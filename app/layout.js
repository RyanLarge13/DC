import "../styles/global.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

export const metadata = {
  title: "DC - Dev Commerce, Build Your Tech Empire",
  description:
    "Dev Commerce, bring your ideas & dreams to the digital world. Expand your empire with a desktop, mobile or web application, deploy the next big trend in technology. You name it, I build it",
  charset: "utf-8",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app pt-20 lg:px-40 px-5">
            <Header />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
