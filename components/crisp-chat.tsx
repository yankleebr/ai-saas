'use client'

import { useEffect } from "react"
import { Crisp } from 'crisp-sdk-web'

export const CrispChat = () => {
    useEffect(() =>{
        Crisp.configure("6418bd7f-72df-4585-8af3-18750f3aeebe")
    }, [])

return null
}