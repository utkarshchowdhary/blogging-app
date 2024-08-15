import PostItem from "./post-item";

import styles from "../styles/posts-grid.module.css";

export default function PostsGrid(props) {
    return (
        <ul className={styles.grid}>
            {props.posts.map((post) => (
                <PostItem
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    image={post.image}
                    date={post.date}
                    excerpt={post.excerpt}
                />
            ))}
        </ul>
    );
}
