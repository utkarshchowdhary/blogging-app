import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
    const slug = postIdentifier.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return { ...data, content, slug };
}

export function getAllPosts() {
    return getPostsFiles()
        .map((postFile) => getPostData(postFile))
        .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getFeaturedPosts() {
    return getAllPosts().filter(({ isFeatured }) => isFeatured);
}
