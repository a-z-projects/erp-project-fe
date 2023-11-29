import { useState } from "react";
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
