'use client'

import React from 'react'
import Link from "next/link";

export default function PropertyPage() {
    return (
        <>
            <h1 className="text-3xl">Properties</h1>
            <button className="bg-blue-500 p-2" onClick={()=> router.push('/') }>Go home</button>
            <Link href='/'>Go Home</Link>
        </>
    )
}
