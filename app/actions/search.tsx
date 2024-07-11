`use server`;
import client from "../../lib/apiClient";

export default async function search(query: string) {
  try {
    const data = await client.get({
      endpoint: "blogs",
      queries: { filters: `title[contains]${query}` },
    });
    return data.contents;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}
