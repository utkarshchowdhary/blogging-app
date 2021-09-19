import Head from "next/head";

import FeaturedPosts from "../components/featured-posts";
import Hero from "../components/hero";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Utkarsh Chowdhary</title>
        <meta name="description" content="personal blogging application." />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
