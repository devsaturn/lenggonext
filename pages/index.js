import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenu à <a href="https://nextjs.org">Lenggo!</a>
        </h1>

        <p className={styles.description}>
          Facilitateur numérique
        </p>


        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Lenggo Produits &rarr;</h3>
            <p>Lenggo RSE - Solution de gestion de projet et dispositif RSE</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Lenggo Services &rarr;</h3>
            <p>AMO insertion emploi - Formation clauses sociales</p>
          </a>

        <p className={styles.description}>
          pour les entreprises, établissement public, promoteurs privés, structures d'insertion
        </p>


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
