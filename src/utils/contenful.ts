import { createClient } from "contentful";

export const CONTENTFUL_ACCESS_TOKEN = import.meta.env
  .VITE_CONTENTFUL_ACCESS_TOKEN;
export const CONTENTFUL_SPACE_ID = import.meta.env
  .VITE_PUBLIC_CONTENTFUL_SPACE_ID;

export const endpoint = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/explore?access_token=${CONTENTFUL_ACCESS_TOKEN}&enviornmentid=master`;

export const client = createClient({
  //@ts-ignore
  space: CONTENTFUL_SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  //@ts-ignore
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});
