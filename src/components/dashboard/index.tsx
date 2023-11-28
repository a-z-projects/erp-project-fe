import { ArrowUp, BarChartBigIcon, Wallet } from "lucide-react";
import Overfiew from "./overfiew";
import DashboardTable from "./table";
import Pagination from "../pagination";
import { useState } from "react";

export default function DashboardPage() {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  return (
    <div className="w-full h-full flex flex-col p-8">
      <span className="text-2xl font-bold mb-7">Overfiew</span>
      <div className="flex justify-between mb-7">
        <Overfiew>
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="font-bold text-4xl">14</span>
              <span className="text-sm font-bold">Projects</span>
            </div>
            <div className="border-l-2 border-black"></div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-4xl">5</span>
              <span className="text-sm font-bold">Aktif</span>
            </div>
          </div>
        </Overfiew>
        <Overfiew>
          <div className="w-full h-full flex gap-x-9 items-center">
            <span className="font-bold text-4xl">Rp14M</span>
            <div className="flex flex-col">
              <span className="font-bold">Revenue</span>
              <div className="flex gap-x-2 justify-center items-center">
                <span className="text-sm text-slate-500">51.5%</span>
                <ArrowUp color="#228B22" />
              </div>
            </div>
            <BarChartBigIcon />
          </div>
        </Overfiew>
        <Overfiew>
          <div className="w-full h-full flex gap-x-9 items-center">
            <span className="font-bold text-4xl">Rp9M</span>
            <div className="flex flex-col">
              <span className="font-bold">Profit</span>
              <div className="flex gap-x-2 justify-center items-center">
                <span className="text-sm text-slate-500">51.5%</span>
                <ArrowUp color="#228B22" />
              </div>
            </div>
            <Wallet />
          </div>
        </Overfiew>
      </div>

      <span className="font-bold">PROJECT</span>
      <div className="w-full rounded-lg border-[1px] border-slate-200">
        <DashboardTable />
      </div>
      
      <Pagination page={page} totalPage={totalPage} onChange={setPage} />
    </div>
  );
}
