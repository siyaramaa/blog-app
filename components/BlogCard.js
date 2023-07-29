import React from 'react'
import Link from "next/link"
import Image from 'next/image';

function BlogCard({title, description, creationDate,tags,author, slug, mainImg}) {

	return (
	
	<div className={`cardContainer group bg-opacity-10 bg-gray-500 dark:bg-opacity-10 dark:bg-gray-700   rounded-md relative container max-w-xl shadow-md  h-56 flex flex-col justify-center max-h-fit p-5 mx-auto`}>
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
	


			{/* <div>
				<Link href={slug} className="flex items-center">
					<img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/87c49e8d86799e2fc5b0b812fb6c5a61-1689702918362/e52f820a-4668-4050-b4e1-158ae3914f41.png" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-400">{author}</span>
				</Link>
			</div> */}
		</div>

	</div>


  )
}

export default BlogCard;




	// <div className={`cardContainer container w-full bg-gradient-to-tr from-teal-50 to-yellow-50 shadow-md h-56 flex flex-col justify-center max-h-fit p-5 mx-auto  dark:bg-gray-800`}>
	// 	<div className="flex items-center justify-between">
	// 		<span className="text-sm dark:text-gray-400">{creationDate}</span>
    //   {/* TODO: FETCHING INDIVIDUAL TAGS. */}
	//   <div className='flex space-x-3'>
    //   {/* {
	// 	  tags?.map((tag) => (
	// 		  <Link key={tag.slug} href={tag.slug} className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">{tag.title}</Link>
	// 		  ))
	// 		} */}
	// 					  <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Tag</p>

	// 		</div>
	// 	</div>
	// 	<div className="mt-3 mx-auto">
	// 		<Link href={slug} className="text-2xl font-medium underline hover:decoration-violet-600">{title}</Link>
	// 		<p className="mt-2 line-clamp-2">{description}</p>
	// 	</div>
	// 	<div className="flex items-center justify-between mx-auto  mt-8">
	// 		<Link href={slug} className="hover:underline dark:text-violet-400">Read more</Link>
	// 		<div className='flex items-center ml-10 space-x-6'>
	// 		<p className="font-bold rounded px-2 bg-gray-200 dark:bg-violet-400 dark:text-gray-900">Javascript</p>
	// 		<p className="font-bold rounded px-2 bg-gray-200 dark:bg-violet-400 dark:text-gray-900">NextJS</p>
	// 		<p className="font-bold rounded px-2 bg-gray-200 dark:bg-violet-400 dark:text-gray-900">Web</p>
	// 		</div>
	// 		<div>
	// 			{/* <Link href={slug} className="flex items-center">
	// 				<img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/87c49e8d86799e2fc5b0b812fb6c5a61-1689702918362/e52f820a-4668-4050-b4e1-158ae3914f41.png" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
	// 				<span className="hover:underline dark:text-gray-400">{author}</span>
	// 			</Link> */}
	// 		</div>
	// 	</div>

	// </div>

