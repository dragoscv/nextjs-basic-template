import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AccessDenied() {
    const router = useRouter()
    useEffect(() => {
        router.push('api/auth/signin')
    }, [])
    return (
        <>
            <main>
                <h1>Access Denied</h1>
                <p>
                    <a href="/api/auth/signin"
                        onClick={(e) => {
                            e.preventDefault()
                            signIn()
                        }}>You must be signed in to view this page</a>
                </p>
            </main>
        </>
    )
}