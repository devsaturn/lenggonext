import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
    const route = useRouter()
    const pathname = route.pathname

    return (
        <div>
        {
            pathname === '/produits' ?
            <Link href="/"><Image src="/logo_RSE.png" width={80} height={80}/></Link> :
            pathname === '/services' ?
            <Link href="/"><Image src="/logo_SERVICES.png" width={80} height={80}/></Link> :
            null
            
        }
            
            
        </div>
    )
}
