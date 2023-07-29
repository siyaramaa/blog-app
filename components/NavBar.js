import NavLinksData from '@/data/NavLinksData'
import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import MobileNav from './MobileNav'
import Image from 'next/image'

function NavBar() {
  
  return (
    <header className="flex items-center justify-between py-5 rounded-b dark:border-none dark:bg-none">
          <div>
            <Link href="/">
              <div className="flex items-center justify-between">
                  <div className="mr-3">
                      <Image src={'/image/ramdhanus.png'} className=' absolute top-2 z-10 left-24' alt='weblogo' width={70} height={50} />
                </div>

              </div>
            </Link>

          </div>
          <div className='searchBar w-72 ml-5 hidden md:block'>
              <input type="text" placeholder='Search blogs...' className='w-full px-5 py-2 rounded-lg border-none outline-none bg-slate-50 dark:bg-gray-700' />
          </div>
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