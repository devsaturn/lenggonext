import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function produits() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lenggo RSE</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

        
            <main className={styles.main}>
                <h1 className={styles.title}>
                Lenggo RSE
                </h1>

                <p>
                Solution de gestion de projets et dispositifs RSE
                </p>


                <div>



                </div>
            </main>
            
        </div>
    )
}

export default produits
