import type React from "react";
import Footer from "@/scenes/Home/sections/Footer";

import BlogNavigation from "../BlogNavigation";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black dark:bg-gray-900 transition-colors duration-300">
      <BlogNavigation />
      <main className="relative z-10 pt-12">{children}</main>
      <Footer />
    </div>
  );
}
