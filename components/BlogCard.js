import React from 'react'
import Link from "next/link"

function BlogCard({title, description, creationDate,tags,author, slug, hcode}) {

	return (
	<div style={{
		background: `linear-gradient(to top, #FFC0CB 0%, ${hcode} 45%)`
	}}  className={`cardContainer container w-full to-yellow-50 border h-56 flex flex-col justify-center max-h-fit p-5 mx-auto  dark:bg-gray-800`}>
		<div className="flex items-center justify-between">
			{/* <span className="text-sm dark:text-gray-400">{creationDate}</span> */}
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
		<div className="mt-3 mx-auto">
			<Link href={slug} className="text-2xl font-medium underline hover:decoration-violet-600">{title}</Link>
			{/* <p className="mt-2 line-clamp-2">{description}</p> */}
		</div>
		<div className="flex items-center justify-between mx-auto  mt-8">
			<Link href={slug} className="hover:underline dark:text-violet-400">Read more</Link>
			<div className='flex items-center ml-10 space-x-6'>
			<p className="font-bold rounded px-2 bg-gray-200 dark:bg-violet-400 dark:text-gray-900">Javascript</p>
			<p className="font-bold rounded px-2 bg-gray-200 dark:bg-violet-400 dark:text-gray-900">NextJS</p>
			<p className="font-bold rounded px-2 bg-gray-200 dark:bg-violet-400 dark:text-gray-900">Web</p>
			</div>
			<div>
				{/* <Link href={slug} className="flex items-center">
					<img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/87c49e8d86799e2fc5b0b812fb6c5a61-1689702918362/e52f820a-4668-4050-b4e1-158ae3914f41.png" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-400">{author}</span>
				</Link> */}
			</div>
		</div>

	</div>

  )
}

export default BlogCard;




// <div style={{
// 		backgroundColor: hcode
// 	}}  className={`cardContainer container max-w-3xl border h-56 flex flex-col justify-center max-h-fit p-5 mx-auto  dark:bg-gray-800`}>
// 		<div className="flex items-center justify-between">
// 			{/* <span className="text-sm dark:text-gray-400">{creationDate}</span> */}
//       {/* TODO: FETCHING INDIVIDUAL TAGS. */}
// 	  <div className='flex space-x-3'>
//       {/* {
// 		  tags?.map((tag) => (
// 			  <Link key={tag.slug} href={tag.slug} className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">{tag.title}</Link>
// 			  ))
// 			} */}
// 						  {/* <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Tag</p> */}

// 			</div>
// 		</div>
// 		<div className="mt-3">
// 			<Link href={slug} className="text-2xl font-medium underline hover:underline">{title}</Link>
// 			{/* <p className="mt-2 line-clamp-2">{description}</p> */}
// 		</div>
// 		<div className="flex items-center justify-between mt-8 ">
// 			<Link href={slug} className="hover:underline dark:text-violet-400">Read more</Link>
// 			<div className='flex w-[60%] items-center justify-evenly '>
// 			<p className="font-bold rounded px-2 bg-gray-200 dark:bg-violet-400 dark:text-gray-900">Javascript</p>
// 			<p className="font-bold rounded px-2 bg-gray-200 dark:bg-violet-400 dark:text-gray-900">NextJS</p>
// 			<p className="font-bold rounded px-2 bg-gray-200 dark:bg-violet-400 dark:text-gray-900">Web</p>
// 			</div>


// 			<div>
// 				{/* <Link href={slug} className="flex items-center">
// 					<img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/87c49e8d86799e2fc5b0b812fb6c5a61-1689702918362/e52f820a-4668-4050-b4e1-158ae3914f41.png" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
// 					<span className="hover:underline dark:text-gray-400">{author}</span>
// 				</Link> */}
// 			</div>
// 		</div>

// 	</div>
