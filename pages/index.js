import { createClient } from "contentful";

export default function Home({ projects }) {
  console.log(projects);
  return <div>Home</div>;
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "project",
  });

  return {
    props: {
      projects: res.items,
    },
  };
}
