'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function Card(){

    const pathName = usePathname();
    console.log(pathName)

    const searchParams = useSearchParams();
    console.log(searchParams.get('search'),searchParams.get('random'))

    return <div> this is cart component</div>
}