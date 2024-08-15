import Link from "next/link";

import Logo from "./logo";

import styles from "../styles/header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" passHref>
                <Logo
                    src="/images/site/blog.svg"
                    alt="logo"
                    height="40"
                    width="40"
                />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts" passHref>
                            <Logo
                                src="/images/site/posts.svg"
                                alt="posts"
                                width="30"
                                height="30"
                                styles={styles.logo}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" passHref>
                            <Logo
                                src="/images/site/contact.svg"
                                alt="contact"
                                width="30"
                                height="30"
                                styles={styles.logo}
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
