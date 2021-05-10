import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileNav } from "./MobileNav";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="text-primary bg-primary py-20">
        <MobileNav />
        <Header />
        <main className="h-full min-h-full">{children}</main>
      </div>
      <Footer />
    </>
  );
};
