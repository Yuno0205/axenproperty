import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStoryblokAssetDimensions(url?: string) {
  if (!url) return undefined;
  const match = url.match(/\/(\d+)x(\d+)\//);
  if (!match) return undefined;

  return {
    width: Number.parseInt(match[1], 10),
    height: Number.parseInt(match[2], 10),
  };
}
