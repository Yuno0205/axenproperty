import { Button } from "@/components/ui/button";
import type { StoryblokButton } from "@/types/storyblok";

import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

const StoryblokButton = ({ blok }: { blok: StoryblokButton }) => {
  const { label, link, variant, size, icon, icon_position, background_color } =
    blok;

  const style = background_color ? { backgroundColor: background_color } : {};

  return (
    <Button
      asChild
      {...storyblokEditable(blok)}
      className={"w-full"}
      variant={variant}
      size={size as "default" | "sm" | "lg" | null | undefined}
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
