'use client'

import { Navigation } from '@/components/Navigation'



export function Layout({ children }) {

    return (
        <>
            <Navigation />
            <div className="flex-1 flex-grow flex-col gap-y-5 overflow-y-auto bg-white px-6">
                {children}
            </div>
        </>
    )
}
