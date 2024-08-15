import Link from "next/link";
import Image from "next/image";

import styles from "../styles/post-item.module.css";

export default function PostItem(props) {
    const formattedDate = new Date(props.date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const imagePath = `/images/posts/${props.slug}/${props.image}`;
    const linkPath = `/posts/${props.slug}`;

    return (
        <li className={styles.post}>
            <Link href={linkPath} passHref>
                <div className={styles.image}>
                    <Image
                        src={imagePath}
                        alt={props.title}
                        width="300"
                        height="200"
                        layout="responsive"
                    />
                </div>
                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <time>{formattedDate}</time>
                    <p>{props.excerpt}</p>
                </div>
            </Link>
        </li>
    );
}
