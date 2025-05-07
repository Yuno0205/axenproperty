import axios from "axios";

/**
 * Fetch HTML content from Webflow
 * @param slug - The slug of the page (e.g., "home", "about")
 * @returns The HTML content or error message
 */
export async function fetchWebflowPage(slug: string): Promise<string> {
  const baseUrl = process.env.WEBFLOW_BASE_URL;
  if (!baseUrl) {
    throw new Error(
      "WEBFLOW_BASE_URL is not defined in the environment variables."
    );
  }
  const url = slug === "home" ? baseUrl : `${baseUrl}/${slug}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    console.error(`Error fetching Webflow page: ${url}`, error.message);
    return "<h1>Page Not Found</h1>";
  }
}
