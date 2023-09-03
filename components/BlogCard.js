import React from 'react'
import Link from "next/link"
import Image from 'next/image';

function BlogCard({title, description, creationDate,tags,author, slug, mainImg}) {

	return (
	
	<div className={`cardContainer group bg-opacity-10 bg-gray-500 dark:bg-opacity-10 dark:bg-gray-700   rounded-md relative container max-w-xl shadow-md  h-56 flex flex-col justify-center max-h-fit p-5 mx-auto text-sm`}>
			<Image
          src={mainImg}
          alt="newsletterImage"
          className="rounded-md opacity-50 group-hover:opacity-50 blur-sm group-hover:blur-none transition-all ease-in duration-100 dark:group-hover:opacity-60 backgroundImg object-cover -z-20 object-center"
          fill
        />

		<div className="flex items-center justify-between ">
			<span className="text-sm dark:text-gray-400">{creationDate}</span>
      {/* TODO: FETCHING INDIVIDUAL TAGS. */}
	  <div className='flex space-x-3'>
      {/* {
		  tags?.map((tag) => (
			  <Link key={tag.slug} href={tag.slug} className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">{tag.title}</Link>
			  ))
			} */}
						  {/* <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Tag</p> */}

			</div>
		</div>
		<div className="mt-3">
			<Link href={slug} className="text-xl line-clamp-1 font-semibold  hover:underline">{title}</Link>
			<p className="mt-2 line-clamp-2">{description}</p>
		</div>
		<div className="flex items-center justify-between mt-8 ">
			<Link href={slug} className="hover:underline  dark:text-violet-400">Read more</Link>
		</div>

	</div>


  )
}

export default BlogCard;

