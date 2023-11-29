import { ArrowUp, BarChartBigIcon, Wallet } from "lucide-react";
import Overfiew from "./overfiew";
import DashboardTable from "./table";
import Pagination from "../pagination";
import { useState } from "react";
import DashboardOverfiew from "./dashboard-overfiew";
import DetailDashbaord from "./detail-dashboard";

export default function DashboardPage() {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  return (
    <div>
      {/* <DashboardOverfiew /> */}
      <DetailDashbaord />
    </div>
  );
}
