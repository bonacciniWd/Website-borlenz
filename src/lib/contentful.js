import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getEntries(contentType) {
  return await client.getEntries({ content_type: contentType });
}

export async function getEntry(id) {
  return await client.getEntry(id);
}
