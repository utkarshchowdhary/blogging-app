import PostsGrid from "./posts-grid";

import styles from "../styles/featured-posts.module.css";

export default function FeaturedPosts(props) {
    return (
        <section className={styles.featured}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts} />
        </section>
    );
}
