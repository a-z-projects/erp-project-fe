import { useEffect, useState } from "react";

export default function Sidebar({
  children,
  onCollapse,
}: Readonly<{
  children: React.ReactNode;
  onCollapse: (isCollapse: boolean) => void;
}>) {
  const [isCollapse, setIsCollapse] = useState(false);
  const handleCollapse = () => {
    onCollapse(!isCollapse);
    setIsCollapse(!isCollapse);
  };
  return (
    <div
      className={`h-screen ${
        isCollapse ? "w-[5%]" : "w-[20%]"
      } transition-all duration-500 ease-in-out border border-input bg-slate-200 p-6 overflow-y-auto overflow-x-hidden ${
        isCollapse && "cursor-pointer"
      }`}
      onKeyUp={(e) => {
        if (isCollapse) {
          setIsCollapse(!isCollapse);
        }
      }}
      onClick={() => {
        if (isCollapse) {
          setIsCollapse(!isCollapse);
        }
      }}
    >
      <div className="flex gap-x-2">
        {!isCollapse && (
          <button
            className="h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center cursor-pointer z-20"
            onClick={handleCollapse}
          >
            <p className="text-black">{isCollapse ? `` : `x`}</p>
          </button>
        )}

        <div className="h-28 w-full bg-white mb-4 rounded-lg"></div>
      </div>
      <hr className="border-black mb-4" />
      {children}
    </div>
  );
}
