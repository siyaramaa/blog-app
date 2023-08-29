'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'



function SearchBar({mobile}) {
    const [searchQuery, setSearchQuery] = useState('');
    let pathname = usePathname();
    let searchParams = useSearchParams()
    useEffect(() => {
      setSearchQuery('');
  
    }, [pathname, searchParams])
  
  return (
    <div className={`searchBar  w-72 ml-5  ${!mobile && 'hidden md:flex'} ${mobile && 'flex'}`}>
    <input type="text" placeholder='Search blogs...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={`flex-1 px-5 py-2 ${searchQuery ? 'rounded-l-lg' : 'rounded-lg'} border-none outline-none bg-slate-50 dark:bg-gray-700`} />        
        
        <Link className={`${!searchQuery && 'opacity-0 pointer-events-none'} delay-75 transition-all ease-out bg-slate-50 ${mobile && 'dark:bg-slate-400'} dark:bg-slate-800 dark:border-none p-1 py-2 rounded-r-lg cursor-pointer hover:bg-slate-400 `} href={`/search?q=${searchQuery}`}>
        <svg className='dark:fill-white' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
</svg>

        </Link>
</div>
  )
}

export default SearchBar