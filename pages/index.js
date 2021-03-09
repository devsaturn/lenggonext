import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TextDescription from '../components/TextDescription'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lenggo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenu à {'    '}
          <span><Image src="/logo.png" width={80} height={80}/>enggo</span>
        </h1>

        <p className={styles.description}>
          Facilitateur numérique
        </p>

        <p className={styles.description}>
        <TextDescription/>
        </p>


        <div className={styles.grid}>
          <div className={styles.card}>
              <Link href="/produits"><a>
                <h3>
                  <Image src="/logo_RSE.png" width={30} height={30}/>
                  enggo RSE &rarr;
                </h3>
                <p>Solution de gestion de projets et dispositifs RSE</p>
              </a>
              </Link>
          </div>

<div className={styles.card}>
          <Link href="/services" >
            <a>
            <h3>
              <Image src="/logo_SERVICES.png" width={30} height={30}/>
              enggo Services &rarr;
            </h3>
            <p>Conseil, accompagnement et formation RSE Emploi</p>
          </a>
          </Link>
</div>



        </div>
      </main>

    </div>
  )
}
