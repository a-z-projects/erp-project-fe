import DashboardPage from "@/components/dashboard";
import { IRoutes } from "@/types/common";
import SPKPage from "@/components/project/spk";
import RABPage from "@/components/project/rab";
import RAPPage from "@/components/project/rap";

export const Routes: IRoutes[] = [
  {
    name: "Dashboard",
    pageCode: "dashboard",
    page: <DashboardPage />,
  },
  {
    name: "Project SPK",
    pageCode: "spk",
    page:  <SPKPage />,
  },
  {
    name: "Project RAB",
    pageCode: "rab",
    page:  <RABPage />,
  },
  {
    name: "Project RAP",
    pageCode: "rap",
    page: <RAPPage />,
  },
];
