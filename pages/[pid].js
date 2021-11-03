import { useState, useEffect, useContext } from "react"
import { useRouter } from 'next/router'

const viewDetails = () => {
    const router = useRouter()
    const [pid, setPid] = useState("")
    const pidRoute = router.query

    useEffect(() => {
        if(!router.isReady) return;
        setPid(pidRoute.pid)
        console.log(pidRoute)
    }, [router.isReady])
    return (
        <>
        Should show something {pid}
        </>
    )
}

export default viewDetails