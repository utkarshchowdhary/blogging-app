import Image from "next/image";
import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";

import styles from "../styles/post-content.module.css";

export default function PostContent(props) {
  const imagePath = `/images/posts/${props.slug}/${props.image}`;

  const markdownComponents = {
    p: (paragraph) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${props.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width="600"
              height="300"
              layout="responsive"
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={props.title} image={imagePath} />
      <ReactMarkdown components={markdownComponents}>
        {props.content}
      </ReactMarkdown>
    </article>
  );
}
