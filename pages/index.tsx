import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
<title>Ninja List | Home</title>
<meta name='keywords' content='ninjas' />
    </Head>
    <div>
    <h1 className={styles.title}>Homepage</h1>
    <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sed iusto aspernatur a quo alias ipsum, numquam voluptatem, provident maiores, asperiores minima labore repellendus non debitis deleniti adipisci libero! Rem.</p>
    <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sed iusto aspernatur a quo alias ipsum, numquam voluptatem, provident maiores, asperiores minima labore repellendus non debitis deleniti adipisci libero! Rem.</p>
    <Link href={"/ninjas"} ><a className={styles.btn}>see ninja listing</a></Link>
</div>
</>
  )
}
 