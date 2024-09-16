'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Home() {
  const route = useRouter();
  function handelClick (){
    route.push('products')
  }
  return (
    <div className="">
      <h1>Navigation using link</h1>
      <Link href={'products'}>Navigate to product</Link>
      <Link href={'account'}>Navigate to account</Link>

      <h1>Navigation using hook useRoter using router it need to be in "useClient" </h1>
      <button onClick={handelClick}>Navigate to product</button>
    </div>
  );
}
