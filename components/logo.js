import Image from "next/image";

import styles from "../styles/logo.module.css";

export default function Logo(props) {
    return (
        <div className={props.styles ?? styles.logo}>
            <Image
                src={props.src}
                alt={props.alt}
                width={props.width}
                height={props.height}
            />
        </div>
    );
}
