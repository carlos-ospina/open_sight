import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import clsx from 'clsx'

import '@/styles/tailwind.css'


export const metadata = {
    title: {
        template: '%s - OpenSight',
        default: 'OpenSight',
    },
    description:
        'Gestiona de forma inteligente en base a las recomendaciones potenciadas por IA',
}

export default function RootLayout({ children }) {
    return (
        <html
            lang="es"
            className={'h-full antialiased bg-white'}
            suppressHydrationWarning
        >
        <head>
            <link rel='icon' href='/favicon.ico' />
        </head>
        <body className="flex min-h-full h-full bg-white dark:bg-slate-900">
        <Providers>
            <Layout>{children}</Layout>
        </Providers>
        </body>
        </html>
    )
}