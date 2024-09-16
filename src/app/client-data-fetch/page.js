"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from 'swr'

//useEffect hook
// swr, useSwr hook
// with loading state
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function clientDataFetch() {
//   const [loading, setLoading] = useState(false);
//   const [users, setUser] = useState([]);

//   async function fetchUserData() {
//     try {
//       setLoading(true);
//       const response = await fetch("https://dummyjson.com/users");
//       const result = await response.json();

     

//       if (result.users) {
//         setUser(result.users);
//         setLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//       setUser([]);
//       setLoading(false);
//     }
//   }

//   useEffect(()=>{
//        fetchUserData ();
//   },[])
const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)

if (error) return <div className="font-extrabold text-3xl">failed to load</div>

  if (isLoading)
    return (
      <h3 className="font-extrabold text-3xl"> Loading User ! Please wait</h3>
    );

  return (
    <div>
      <p>Clinet side data fetching</p>
      <ul>
        {data && data.users && data.users.length > 0 ?  
            data.users.map((user) => <li className="pt-5 cursor-pointer">
                <Link href={`/client-data-fetch/${user.id}`}>{ user.firstName}</Link>
            </li>)
            : null}
      </ul>
    </div>
  );
}
