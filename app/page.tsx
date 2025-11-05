import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export default async function Home() {
  const fetchData = async () => {
    const storyblokApi = getStoryblokApi();
    return await storyblokApi.get(`cdn/stories/home`, { version: "draft" });
  };

  const { data } = await fetchData();

  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div>
  );
}
