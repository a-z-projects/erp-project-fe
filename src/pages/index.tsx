import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import MenuItem from "@/components/menu-item";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isSidebarCollapse, setIsSidebarCollapse] = useState(false);
  return (
    <main className={`${inter.className} w-full h-full flex`}>
      <Sidebar onCollapse={(value) => setIsSidebarCollapse(value)}>
        <MenuItem>{isSidebarCollapse ? "DB" : "DummyButton"}</MenuItem>
      </Sidebar>
    </main>
  );
}
