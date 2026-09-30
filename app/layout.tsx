import type { Metadata } from "next";
import { Quicksand, Caveat } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "LoveBaeLink 💌 | Big love in a tiny link",
  description: "Make your favourite boy smile instantly. Create a cute, personalized digital surprise card for Boyfriend's Day in 60 seconds!",
  openGraph: {
    title: "LoveBaeLink 💌 | Big love in a tiny link",
    description: "Make your favourite boy smile instantly. Create a cute digital surprise card for him! ✨",
    type: "website",
  },
  icons:{
    icon: '/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      cz-shortcut-listen="true"
        className={`${quicksand.variable} ${caveat.variable} font-quicksand bg-pink-50 min-h-svh`}
      >
        <div className="mx-auto w-full max-w-md bg-white min-h-svh shadow-2xl relative overflow-hidden flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}