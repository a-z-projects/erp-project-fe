import React from "react";

export default function Navbar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full h-20 border-b-[1px] border-slate-200 flex justify-end items-center gap-x-3 p-3">
      {children}
    </div>
  );
}
