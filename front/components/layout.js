import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="furima" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <ul>
          <li className={styles.linkTo}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.linkTo}>
            <Link href="/todo">
              <a>TODO</a>
            </Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
}
