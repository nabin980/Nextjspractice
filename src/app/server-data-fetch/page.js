
// fetch

import Link from "next/link";

async function fetchListOfUser(){

    try {
        const response = await fetch('https://dummyjson.com/users');
        const result = await response.json();

        return result.users;

    } catch (error) {
        throw new Error(error);
    }

}

export default async function serverDataFetch(){

    const listOfUser = await fetchListOfUser();

    

    return <div>
       <h1 className="p-10 text-xl">
       Server side data fetching : List of the User
       </h1>
    <ul>
        {
            listOfUser && listOfUser.length > 0 ?  
            listOfUser.map(user => <li className="pt-5 cursor-pointer">
                <Link href={`/server-data-fetch/${user.id}`}>{ user.firstName}</Link>
            </li>)
            : null
        }
    </ul>
    </div>
}