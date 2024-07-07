import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: String(process.env.NEXT_PUBLIC_SERVER_DOMAIN),
  apiKey: String(process.env.NEXT_PUBLIC_API_KEY),
});
export default client;
