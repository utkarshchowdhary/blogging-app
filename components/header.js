import Link from "next/link";

import Logo from "./logo";

import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo src="/images/site/blog.png" alt="logo" height="40" width="40" />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">
              <a>
                <Logo
                  src="/images/site/posts.png"
                  alt="posts"
                  width="30"
                  height="30"
                  styles={styles.logo}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>
                <Logo
                  src="/images/site/contact.png"
                  alt="contact"
                  width="30"
                  height="30"
                  styles={styles.logo}
                />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
