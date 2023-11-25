import { useEffect, useState } from "react";

export default function Sidebar({ children, onCollapse }: Readonly<{ children: React.ReactNode; onCollapse: (isCollapse: boolean) => void }>) {
  const [isCollapse, setIsCollapse] = useState(false);
  const handleCollapse = () => {
    onCollapse(!isCollapse);
    setIsCollapse(!isCollapse);
  }
  return (
    <div
      className={`h-screen ${
        isCollapse ? "w-[5%]" : "w-[20%]"
      } transition-all duration-500 ease-in-out border border-input bg-background relative p-6`}
    >
      <button
        className="absolute top-10 -right-5 h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleCollapse}
      >
        <p className="text-black">{isCollapse ? `>` : `<`}</p>
      </button>
      <div className="h-28 w-full bg-slate-200 mb-4 rounded-lg"></div>
      <hr className="border-black mb-4" />
      {children}
    </div>
  );
}
