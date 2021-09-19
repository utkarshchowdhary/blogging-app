import PostsGrid from "./posts-grid";

import styles from "../styles/all-posts.module.css";

export default function AllPosts(props) {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
