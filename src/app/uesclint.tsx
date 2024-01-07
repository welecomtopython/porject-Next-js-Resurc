
"use client"

import {usePathname} from 'next/navigation'
export  const us=()=>{
    return  usePathname()
}

export const use=[{path:usePathname()}]
