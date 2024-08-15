import Head from "next/head";

import PostContent from "../../components/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

export default function PostDetailPage({ post }) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
            </Head>
            <PostContent
                slug={post.slug}
                title={post.title}
                image={post.image}
                content={post.content}
            />
        </>
    );
}

export function getStaticProps(context) {
    const {
        params: { slug },
    } = context;

    const post = getPostData(slug);

    return {
        props: {
            post,
        },
    };
}

export function getStaticPaths() {
    const slugs = getPostsFiles().map((postFile) =>
        postFile.replace(/\.md$/, "")
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}
