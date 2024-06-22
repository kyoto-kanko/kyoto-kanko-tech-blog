import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <title>猫と京都と酒</title>
      </head>
      <body className="font-mono">
        <Header />
        <main className="pt-16 m-1/3"></main>
        {children}
        <Footer />
      </body>
    </html>
  );
}
