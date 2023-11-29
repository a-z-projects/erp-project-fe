import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import MenuItem from "@/components/menu-item";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Profile from "@/components/profile";
import DashboardPage from "@/components/dashboard";
import ProjectPage from "@/components/project";
import { Routes } from "@/constants/routes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isSidebarCollapse, setIsSidebarCollapse] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<string>("dashboard");

  return (
    <main className={`w-full h-full flex`}>
      <Sidebar onCollapse={(value) => setIsSidebarCollapse(value)}>
        <MenuItem
          title="Dashboard"
          isActive={selectedMenu == "dashboard"}
          pageCode="dashboard"
          onClick={(value) => setSelectedMenu(value)}
        />

        <MenuItem
          title="Project"
          subItem={[
            {
              link: "/dashboard",
              title: "SPK",
              code: "spk",
            },
            {
              link: "/dashboard",
              title: "RAB",
              code: "rab",
            },
            {
              link: "/dashboard",
              title: "rap",
              code: "rap",
            },
          ]}
          isActive={selectedMenu == "project"}
          onClick={(value) => setSelectedMenu(value)}
        />

        <MenuItem
          title="Order"
          subItem={[
            {
              link: "/dashboard",
              title: "Purchase Request",
              code: "purchase-request",
            },
            {
              link: "/dashboard",
              title: "Purchase Order",
              code: "purchase-order",
            },
            {
              link: "/dashboard",
              title: "Work Order",
              code: "work-order",
            },
            {
              link: "/dashboard",
              title: "Petty Cash",
              code: "petty-cash",
            },
          ]}
          isActive={selectedMenu == "order"}
          onClick={(value) => setSelectedMenu(value)}
        />

        <MenuItem
          title="Material"
          subItem={[
            {
              link: "/dashboard",
              title: "Material Masuk",
              code: "material-masuk",
            },
            {
              link: "/dashboard",
              title: "Material Keluar",
              code: "material-keluar",
            },
            {
              link: "/dashboard",
              title: "Stock Opname",
              code: "stock-opname",
            },
          ]}
          isActive={selectedMenu == "material"}
          onClick={(value) => setSelectedMenu(value)}
        />

        <MenuItem
          title="Report"
          subItem={[
            {
              link: "/dashboard",
              title: "Daily Report",
              code: "daily-report",
            },
            {
              link: "/dashboard",
              title: "Progress Report",
              code: "progress-report",
            },
          ]}
          isActive={selectedMenu == "report"}
          onClick={(value) => setSelectedMenu(value)}
        />

        <MenuItem
          title="Finance"
          subItem={[
            {
              link: "/dashboard",
              title: "Vouching",
              code: "vouching",
            },
            {
              link: "/dashboard",
              title: "Invoice",
              code: "invoice",
            },
          ]}
          isActive={selectedMenu == "finance"}
          onClick={(value) => setSelectedMenu(value)}
        />

        <MenuItem
          title="Master Data"
          pageCode="master-data"
          isActive={selectedMenu == "master-data"}
          onClick={(value) => setSelectedMenu(value)}
        />

        <MenuItem
          title="Settings"
          pageCode="settings"
          isActive={selectedMenu == "settings"}
          onClick={(value) => setSelectedMenu(value)}
        />
      </Sidebar>
      <div className="flex flex-col w-full">
        <Navbar>
          <Profile name="Dev" title="Web Developer" />
        </Navbar>
        {Routes.find((el) => el.pageCode == selectedMenu)?.page}
      </div>
    </main>
  );
}
