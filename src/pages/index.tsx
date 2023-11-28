import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import MenuItem from "@/components/menu-item";
import { useState } from "react";
import Navbar from "@/components/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Profile from "@/components/profile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isSidebarCollapse, setIsSidebarCollapse] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<string>("dashboard");

  return (
    <main className={`w-full h-screen flex`}>
      <Sidebar onCollapse={(value) => setIsSidebarCollapse(value)}>
        <MenuItem          
          title="Dashboard"
          isActive={selectedMenu == "dashboard"}
          onClick={() => setSelectedMenu("dashboard")}
        />

        <MenuItem
          title="Project"
          subItem={[
            {
              link: "/dashboard",
              title: "SPK",
            },
            {
              link: "/dashboard",
              title: "RAB",
            },
            {
              link: "/dashboard",
              title: "DAM",
            },
          ]}
          isActive={selectedMenu == "project"}
          onClick={() => setSelectedMenu("project")}
        />

        <MenuItem
          title="Order"
          subItem={[
            {
              link: "/dashboard",
              title: "Purchase Request",
            },
            {
              link: "/dashboard",
              title: "Purchase Order",
            },
            {
              link: "/dashboard",
              title: "Work Order",
            },
            {
              link: "/dashboard",
              title: "Petty Cash",
            },
          ]}
          isActive={selectedMenu == "order"}
          onClick={() => setSelectedMenu("order")}
        />

        <MenuItem
          title="Material"
          subItem={[
            {
              link: "/dashboard",
              title: "Material Masuk",
            },
            {
              link: "/dashboard",
              title: "Material Keluar",
            },
            {
              link: "/dashboard",
              title: "Stock Opname",
            },
          ]}
          isActive={selectedMenu == "material"}
          onClick={() => setSelectedMenu("material")}
        />

        <MenuItem
          title="Report"
          subItem={[
            {
              link: "/dashboard",
              title: "Daily Report",
            },
            {
              link: "/dashboard",
              title: "Progress Report",
            },
          ]}
          isActive={selectedMenu == "report"}
          onClick={() => setSelectedMenu("report")}
        />

        <MenuItem
          title="Finance"
          subItem={[
            {
              link: "/dashboard",
              title: "Vouching",
            },
            {
              link: "/dashboard",
              title: "Invoice",
            },
          ]}
          isActive={selectedMenu == "finance"}
          onClick={() => setSelectedMenu("finance")}
        />

        <MenuItem
          title="Master Data"
          link="/dashboard"
          isActive={selectedMenu == "master-data"}
          onClick={() => setSelectedMenu("master-data")}
        />

        <MenuItem
          title="Settings"
          link="/dashboard"
          isActive={selectedMenu == "settings"}
          onClick={() => setSelectedMenu("settings")}
        />
      </Sidebar>
      <Navbar>
          <Profile 
            name="Dev"
            title="Web Developer"
          />
      </Navbar>
    </main>
  );
}
