`use server`;
import client from "../../lib/apiClient";

export default async function search(query: string) {
  const data = await client.get({
    endpoint: "blogs",
    queries: { filters: `title[contains]${query}` },
  });
  return data.contents;
}
