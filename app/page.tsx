import { fetchWebflowPage } from "@/app/utils/fetch";

export default async function HomePage() {
  const htmlContent = await fetchWebflowPage("home");

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      className="webflow-content"
    />
  );
}
