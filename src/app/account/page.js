import { redirect } from "next/navigation";

export default function Account() {
    // assume that profile info is null
    const userInfo = null;

    if(userInfo === null) redirect ('products?search=product1')
  return <div>this is acccount page</div>;
}
