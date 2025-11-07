import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Asset } from "@/types/storyblok";

interface IStoryblokButton extends SbBlokData {
  label: string;
  link: string;
  variant:
    | "secondary"
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "ghost";
  size: "default" | "sm" | "lg";
  icon: Pick<Asset, "filename" | "alt">;
  icon_position: "left" | "right";
  background_color: string;
}

const StoryblokButton = ({ blok }: { blok: IStoryblokButton }) => {
  const {
    label,
    link,
    variant,
    size,
    icon,
    icon_position,
    full_width,
    background_color,
  } = blok;

  const style = background_color ? { backgroundColor: background_color } : {};

  return (
    <Button
      asChild
      {...storyblokEditable(blok)}
      className={full_width ? "w-full" : ""}
      variant={
        variant as
          | "secondary"
          | "link"
          | "default"
          | "destructive"
          | "outline"
          | "ghost"
          | null
          | undefined
      }
      size={size as "icon" | "default" | "sm" | "lg" | null | undefined}
      style={style}
    >
      <Link href={link || "/"}>
        {icon?.filename && icon_position === "left" && (
          <Image
            src={icon.filename}
            alt={icon.alt || "icon"}
            width={20}
            height={20}
            className="mr-2"
          />
        )}
        {label}
        {icon?.filename && icon_position === "right" && (
          <Image
            src={icon.filename}
            alt={icon.alt || "icon"}
            width={20}
            height={20}
            className="ml-2"
          />
        )}
      </Link>
    </Button>
  );
};

export default StoryblokButton;
