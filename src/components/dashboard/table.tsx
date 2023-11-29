import { colorByStatus } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Search } from "lucide-react";
import { ColorStatus } from "@/types/common";

export default function DashboardTable() {
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
      <th align="left" className="w-0 py-4 px-5">
        NO. SPK
      </th>
      <th align="left" className="w-0 py-4 px-5">
        Proyek
      </th>
      <th align="left" className="w-0 py-4 px-5">
        Tgl. SPK
      </th>
      <th align="left" className="w-0 py-4 px-5">
        Waktu Pelaksanaan
      </th>
      <th align="left" className="w-0 py-4 px-5">
        Progress
      </th>
      <th align="left" className="w-0 py-4 px-5">
        Nilai Kontrak
      </th>
      <th align="left" className="w-0 py-4 px-5">
        Pembayaran
      </th>
      <th align="left" className="w-0 py-4 px-5">
        Outstanding
      </th>
      <th align="left" className="w-0 py-4 px-5">
        Status Invoice
      </th>
      <th align="left" className="w-0 py-4 px-5">
        Action
      </th>
    </tr>
  );
}

function TableBody() {
  return (
    <tr className="hover:bg-[#fafafa]">
      <td align="center" className="px-5 py-2">004/MUI/SPK/BD</td>
      <td align="center" className="px-5 py-2">ALFAMIDI SIUMBATU Kendari</td>
      <td align="center" className="px-5 py-2">27-01-2003</td>
      <td align="center" className="px-5 py-2">27-01-2003-27-01-2003</td>
      <td align="center" className="px-5 py-2"><Badge className={`${colorByStatus(ColorStatus.FULL)}`}  >Tulisan</Badge></td>
      <td align="center" className="px-5 py-2 font-bold">726.000.000</td>
      <td align="center" className="px-5 py-2 bg-yellow-300">200.000.000</td>
      <td align="center" className="px-5 py-2 bg-red-300">300.000.000</td>
      <td align="center" className="px-5 py-2"><Badge className={`${colorByStatus(ColorStatus.FULL)}`}  >Termin 1-20%</Badge></td>
      <td align="center" className="px-5 py-2"><Search /></td>
    </tr>
  );
}
