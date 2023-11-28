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
  }[];
  isActive: boolean;
  onClick: () => void;
}
export default function MenuItem({
  title,
  subItem,
  link,
  isActive = false,
  onClick,
}: MenuItemProps) {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const handleClick = () => {
    onClick();
    setIsCollapse(!isCollapse);
  };

  return (
    <div className="w-full bg-slate-200 rounded-lg truncate">
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className=" flex w-full justify-start mb-2"
        onClick={() => handleClick()}
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
              >
                <p>+</p>
                <p>{item.title}</p>
              </Button>
            );
          })}
          {/* </ul> */}
        </div>
      )}
    </div>
  );
}
