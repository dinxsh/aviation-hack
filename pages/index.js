import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>StarSeek - Space Exploration</title>
        <meta name="description" content="space exploration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
      </main >
    </>
  )
}
