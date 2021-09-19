import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Hey, I&apos;m Utkarsh.</h1>
      <p>
        I&apos;m a software engineer. I love building open-source projects and
        sharing my knowledge. This website is my digital garden — a compendium
        of the things I&apos;ve learned and created over the years.
      </p>
    </section>
  );
}
