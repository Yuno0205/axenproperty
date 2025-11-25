import { Button } from "@/components/ui/button";
import { SbButton } from "@/types/storyblok";

import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

const StoryblokButton = ({ blok }: { blok: SbButton }) => {
  const {
    label,
    link,
    variant,
    size,
    icon,
    icon_position,
    padding,
    border_radius,
  } = blok;

  const normalizedSize: "default" | "sm" | "lg" =
    size === "md" || !size ? "default" : size;

  const mapPadding = {
    default: "",
    sm: "py-4 px-8",
    md: "py-6 px-12",
    lg: "py-8 px-16",
  };

  const mapBorderRadius = {
    default: "",
    none: "rounded-none",
    sm: "rounded-sm",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const normalizedPadding = mapPadding[padding];
  const normalizedBorderRadius = mapBorderRadius[border_radius];
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
    className: `${normalizedPadding} ${normalizedBorderRadius}`,
    variant,
    size: normalizedSize,
  } as const;

  const linkTarget = link?.target ? link.target : "_self";
  const linkHref = link?.url ? link.url : link?.cached_url;

  if (link && linkHref && linkHref !== "") {
    return (
      <Button asChild {...buttonProps}>
        <Link href={linkHref} target={linkTarget}>
          {buttonChildren}
        </Link>
      </Button>
    );
  }

  return <Button {...buttonProps}>{buttonChildren}</Button>;
};

export default StoryblokButton;
