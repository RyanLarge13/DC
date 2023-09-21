import "../styles/global.css";
import Nav from "../components/Nav";
import Provider from "../components/Provider";

export const metadata = {
  title: "DC - Dev Commerce, Build Your Tech Empire",
  description:
    "Dev Commerce, bring your ideas & dreams to the digital world. Expand your empire with a desktop, mobile or web application, deploy the next big trend in technology. You name it, I build it",
  charset: "utf-8",
  icons: {
    icon: "/favicon.ico",
  },
  viewport:
    "width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app pt-20">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
