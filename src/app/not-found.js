import Link from "next/link";



export default function NotFound(){
    return <div>
        <p>
            Page not found
        </p>
        <Link href={'/'}>Go back</Link>
    </div>
}