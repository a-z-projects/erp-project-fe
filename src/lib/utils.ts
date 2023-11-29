import { ColorStatus } from "@/types/common";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function colorByStatus(status: ColorStatus) {
  switch (status) {
    case ColorStatus.EMPTY:
      return "bg-red-200";
    case ColorStatus.LESS:
      return "bg-yellow-200";
    case ColorStatus.HALF:
      return "bg-green-200";
    case ColorStatus.FULL:
      return "bg-blue-200";
  }
}
