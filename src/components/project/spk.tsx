import { EyeIcon, LucidePlusSquare, PenIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Pagination from "../pagination";
import { useState } from "react";

export default function SPKPage() {
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0);
  return (
    <div className="w-full h-full flex flex-col p-8">
      <div className="border-[1px] border-slate-200 h-full w-full rounded-lg p-8">
        <div className="font-bold mb-6">Daftar SPK</div>
        <div className="mb-7">
          <Button className="flex gap-x-3">
            <span className="text-white">New SPK</span>
            <LucidePlusSquare />
          </Button>
        </div>
        <div>
          <Table />
        </div>
        <Pagination page={page} totalPage={totalPage} onChange={setPage} />
      </div>
    </div>
  );
}

function Table() {
  return (
    <table className="w-full overflow-hidden rounded-t-lg">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        <TableBody />
        <TableBody />
        <TableBody />
      </tbody>
    </table>
  );
}

function TableHeader() {
  return (
    <tr className="bg-[#E3E3E3] text-sm">
      <th align="center" className="w-0 py-4 px-5">
        Nomor SPK
      </th>
      <th align="center" className="w-0 py-4 px-5">
        Proyek Pengerjaan
      </th>
      <th align="center" className="w-0 py-4 px-5">
        Tanggal SPK
      </th>
      <th align="center" className="w-0 py-4 px-5">
        Tanggal Mulai
      </th>
      <th align="center" className="w-0 py-4 px-5">
        Tanggal Berakhir
      </th>
      <th align="center" className="w-0 py-4 px-5">
        Status Dokumentasi
      </th>
      <th align="center" className="w-0 py-4 px-5">
        Action
      </th>
    </tr>
  );
}

function TableBody() {
  return (
    <tr>
      <td align="center" className="px-5 py-2">
        004/MUI/SPK/BD
      </td>
      <td align="center" className="px-5 py-2">
        ALFAMIDI SIUMBATU
      </td>
      <td align="center" className="px-5 py-2">
        27-01-2023
      </td>
      <td align="center" className="px-5 py-2">
        14-04-2023
      </td>
      <td align="center" className="px-5 py-2">
        14-04-2023
      </td>
      <td align="center" className="px-5 py-2">
        <div className="flex gap-x-2 items-center justify-center">
          <Checkbox id="status" />
          <label htmlFor="status">SPK</label>
        </div>
      </td>
      <td align="center" className="px-5 py-2">
        <div className="flex gap-x-2 items-center justify-center">
          <EyeIcon />
          <PenIcon />
        </div>
      </td>
    </tr>
  );
}
