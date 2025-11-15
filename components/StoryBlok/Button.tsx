import { Button } from "@/components/ui/button";
import { SbButton } from "@/types/storyblok";

import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

const StoryblokButton = ({ blok }: { blok: SbButton }) => {
  const { label, link, variant, size, icon, icon_position, background_color } =
    blok;

  const style = background_color ? { backgroundColor: background_color } : {};
  const normalizedSize: "default" | "sm" | "lg" =
    size === "md" || !size ? "default" : size;

  const buttonChildren = (
    <>
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
    </>
  );

  const buttonProps = {
    ...storyblokEditable(blok),
    className: "w-full",
    variant,
    size: normalizedSize,
    style,
  } as const;

  if (link) {
    return (
      <Button asChild {...buttonProps}>
        <Link href={link}>{buttonChildren}</Link>
      </Button>
    );
  }

  return <Button {...buttonProps}>{buttonChildren}</Button>;
};

export default StoryblokButton;
