import NavLinksData from '@/data/NavLinksData'
import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import MobileNav from './MobileNav'
import Image from 'next/image'
import SearchBar from './SearchBar'

function NavBar() {
  
  return (
    <header className="flex sticky text-sm  top-0 z-50 border mb-4 bg-gradient-to-br from-yellow-100 to-red-100 items-center justify-between sm:justify-evenly py-3 rounded-b-lg dark:border-none dark:bg-none dark:bg-slate-600 dark:bg-opacity-10">
          <div>
            <Link href="/">
              <div className="flex items-center justify-between">
                  <div className="mr-3">
                      <Image src={'/image/ramdhanus.png'} className=' absolute top-2 z-10 left-5 w-14  md:left-24' alt='weblogo' width={70} height={50} />
                </div>

              </div>
            </Link>

          </div>
          <SearchBar />
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {NavLinksData.map((link) => (
                <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
             <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
  )
}

export default NavBar