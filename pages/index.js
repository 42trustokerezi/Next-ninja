import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="Keywords" ontent="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>bbvbvjfbvjfnfjgnfgnerfrnrengrjengfjbfnvdvndcdnsvfbfbfjvdjbdvjdfvfkjvnfdvfnvdndcjvdfbjfbvfjvjfvjvfjvfvfvc cm cmv fvfnvvvfdbnbjfvvcmx vmcvfvfj</p>
        <p className={styles.text}>bbvbvjfbvjfnfjgnfgnerfrnrengrjengfjbfnvdvndcdnsvfbfbfjvdjbdvjdfvfkjvnfdvfnvdndcjvdfbjfbvfjvjfvjvfjvfvfvc cm cmv fvfnvvvfdbnbjfvvcmx vmcvfvfj</p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
