import React from 'react'
import '@/assets/styles/globals.css'


export const metadata = {
    title: 'PropertyPulse | Find the Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rental, find property'
}

export default function MainLayout({children}) {
    return (
        <html lang='en'>
            <body>
                <div>{children}</div>
            </body>
        </html>

    )
}
