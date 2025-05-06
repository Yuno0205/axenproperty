import { usePathname } from "next/navigation";

export function useLocale() {
  const pathname = usePathname();
  const segments = pathname.split("/");

  // Locale sẽ là phần tử đầu tiên trong đường dẫn sau dấu /
  const locale = segments[1] === "vi" ? "vi" : "en";

  return { locale };
}
