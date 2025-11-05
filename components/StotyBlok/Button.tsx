import { storyblokEditable } from "@storyblok/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const StoryblokButton = ({ blok }: { blok: any }) => {
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

  const style = background_color?.color
    ? { backgroundColor: background_color.color }
    : {};

  return (
    <Link
      href={link.cached_url || "/"}
      {...storyblokEditable(blok)}
      className={full_width ? "w-full" : ""}
    >
      <Button
        variant={variant}
        size={size}
        className={full_width ? "w-full" : ""}
        style={style}
      >
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
      </Button>
    </Link>
  );
};

export default StoryblokButton;
