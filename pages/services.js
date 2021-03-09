import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function services() {
    return (
        <div className={styles.container}>  
            <Head>
                <title>Lenggo services</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                Lenggo Services
                </h1>

                <p>
                Conseil, accompagnement et formation 
                </p>


                <div>



                </div>
            </main>
        </div>
    )
}

export default services
