import React from 'react'
import SocialMedia from './SocialMedia'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="text-gray-900 dark:text-gray-100 ">
    <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
  
      <div className="mt-3 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
        <div className="mx-auto max-w-sm lg:max-w-none">
          <h1 className='font-extrabold text-3xl'>The BLOG</h1>
          <p className="mt-4 text-center lg:text-left lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
            natus quod eveniet aut perferendis distinctio iusto repudiandae,
            provident velit earum. <span className='font-extrabold text-xl underline decoration-violet-700'> Support us on Patreon</span>
          </p>

          <p className="mt-4 text-center lg:text-left lg:text-lg">
                     Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.
 <span className='font-extrabold text-xl underline decoration-violet-700'> Join the newsletter</span>
          </p>

  
          <div className="mt-6 flex justify-center gap-4 lg:justify-start">
         <SocialMedia />
         <SocialMedia />
         <SocialMedia />
         <SocialMedia />
         <SocialMedia />

        
          </div>
        </div>
  
        <div
          className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
        >
          <div>
            <p className="font-extrabold text-lg font-mono">About Us</p>
  
            <ul className="mt-6 space-y-1 underline decoration-violet-700">
              <li>
                <a
                  className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition "
                  href="/"
                >
                  About 1
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition "
                  href="/"
                >
                    About 2
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition "
                  href="/"
                >
                  About 3
                </a>
              </li>
                <li>

              <Link
                  className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition "
                  href="/contact"
                  >
                  Contact
                </Link>
                  </li>
            </ul>
          </div>
  
          <div>
            <strong className="font-extrabold text-lg"> Follow Us </strong>
  
            <ul className="mt-6 space-y-1 underline decoration-violet-700">
              <li>
                <a
                  className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition "
                  href="/"
                >
                  Link 1
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition "
                  href="/"
                >
                  Link 2
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition "
                  href="/"
                >
                  Link 3
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition "
                  href="/"
                >
                  Link 4
                </a>
              </li>
            </ul>
          </div>
                <div className='border h-full w-72 text-center gap-3 grid grid-cols-2'>
                              <div className='bg-gray-400 border h-32'>
                                Sponsor 1
                              </div>
                              <div className='bg-gray-400 border h-32'>
                                Sponsor 1
                              </div>
                              <div className='bg-gray-400 border h-32'>
                                Sponsor 1
                              </div>
                              <div className='bg-gray-400 border h-32'>
                                Sponsor 1
                              </div>
                </div>


          <div>
  
          </div>
        </div>
      </div>
  
      <div className="mt-16 border-t border-gray-100 pt-8">
        <p className="text-center text-xs/relaxed text-gray-500 dark:text-gray-200">
          © Company 2023. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer