import React, { useState } from "react";
import { Button } from "./ui/button";
import { link } from "fs";

interface MenuItemProps {
  icon?: JSX.Element;
  link?: string;
  title: string;
  subItem?: {
    link: string;
    title: string;
    code: string;
  }[];
  isActive: boolean;
  onClick: (pageCode: string) => void;
  pageCode?: string;
}
export default function MenuItem({
  title,
  subItem,
  isActive = false,
  onClick,
  pageCode,
}: Readonly<MenuItemProps>) {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const handleClick = (code: string, isSub: boolean) => {
    onClick(code);
    if(!isSub) {
      setIsCollapse(!isCollapse);
    }
  };

  return (
    <div className="w-full bg-slate-200 rounded-lg truncate">
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className=" flex w-full justify-start mb-2"
        onClick={() => handleClick(pageCode ?? "", false)}
      >
        {title}
      </Button>
      {isCollapse && (
        <div className="w-full ">
          {subItem?.map((item, index) => {
            return (
              <Button
                key={index}
                className=" ml-8 flex justify-start gap-x-3 w-full text-slate-600"
                variant={"ghost"}
                onClick={() => handleClick(item.code, true)}
              >
                <p>+</p>
                <p>{item.title}</p>
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
}
