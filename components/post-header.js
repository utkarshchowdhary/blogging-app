import Image from "next/image";

import styles from "../styles/post-header.module.css";

export default function PostHeader(props) {
    return (
        <header className={styles.header}>
            <h1>{props.title}</h1>
            <Image
                src={props.image}
                alt={props.title}
                width="200"
                height="120"
            />
        </header>
    );
}
