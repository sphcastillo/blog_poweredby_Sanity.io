import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { draftMode } from "next/headers";
import LiveVisualEditing from "@/components/LiveVisualEditing";


export const metadata: Metadata = {
  title: "Stella Flex: Where Passion and Fitness Collide",
  description: "Fitness and wellness for everyone. For every body. For every lifestyle. For every goal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="max-w-7xl mx-auto bg-[#f2f5f7]">
        <Header />
        <Banner />
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
