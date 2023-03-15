import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { LinkedinLogo, GithubLogo, InstagramLogo } from "phosphor-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Joao Marcos</title>
        <meta name="description" content="That's Joao Marco's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/j.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.area}>
          <h1>João Marcos</h1>
          <p>Software Developer</p>
          <div className={styles.icons}>
            <Link href="https://www.linkedin.com/in/joaomarcosbc/">
              <LinkedinLogo size={32} />
            </Link>
            <Link href="https://www.github.com/joaomarcosbc/">
              <GithubLogo size={32} />
            </Link>
            <Link href="https://www.instagram.com/joaomarcosbc/">
              <InstagramLogo size={32} />
            </Link>
          </div>
        </div>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </main>
    </>
  );
}
