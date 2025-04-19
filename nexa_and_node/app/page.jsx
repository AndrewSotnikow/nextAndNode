import React from 'react'
import Link from "next/link";

export default function HomePage() {
    return (
     <>
         <h1 className="text-3xl">Welcome to PropertyPulse</h1>
         <Link href='/properties'>Show Properties</Link>
     </>
    )
}
