import { Fragment } from 'react'

export default function Home({children}) {
    return (
        <>
            <div>
                <main className="py-10 lg:pl-72">
                    <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </>
    )
}