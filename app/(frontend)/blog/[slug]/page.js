import React from 'react'
import dynamic from "next/dynamic"
import { client } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { RichTextComponent } from '@/components/RichTextComponent';
import urlFor from '@/lib/sanityImageUrl';
import { notFound } from 'next/navigation'



//Generating meta data for blog post and adding it to title of the page.
export async function generateMetadata({ params }) {
  return {
    title: params.slug,
  }
}


//Dynamically importing Blog Cards with loading skeleton.
const BlogCard = dynamic(() => import('@/components/BlogCard'), {
        ssr: false,
        loading: () => 
        <div role="status" className="animate-pulse container max-w-xl h-[30vh]  p-5 mx-auto rounded-lg shadow-lg dark:bg-gray-800">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
  
        <span className="sr-only">Loading...</span>
    </div>
        
})


//Revalidating data after every 30 secs which will serve the cached pages and rebuild them after 30 secs. (UPDATES CAN ONLY BE SEEN AFTER 30 seconds)
export const revalidate = 30;


//Generating static params for the post and caching them to serve them faster.
export async function generateStaticParams(){
  const query = `*[_type == "post"]
  {
    slug,
  }
  `; 
  const slugs =  await client.fetch(query);
  const slugRoutes = slugs.map((s) => s.slug.current);

  return slugRoutes.map((slug) => ({
      slug,
  }))

}



//Function to get post data by its slug.
const getDataBySlug = async (slug) => {
        const query = `*[_type == "post" && slug.current == "${slug}"][0]
        {
          ...,
          author->,
          "related": *[_type == "post" && slug.current !="${slug}" && count(categories[@._ref in ^.^.categories[]._ref]) > 0]{
            title,
            slug,
            _createdAt,
            mainImage,
            description
          },
        }
        `;
        const data = await client.fetch(query);
        return data;
}



async function Blog({params}) {
  //Fetching data from the database for the post.
  const postData = await getDataBySlug(params.slug);
  //Loading a page not found page incase if there is not any data for the post.
  if(!postData){
    notFound();
  }
  return (
      
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
    <header className="pt-6 xl:pb-6 border-t border-t-gray-200 dark:border-t-gray-700">

      <div className="space-y-1 text-center">
        <div className="space-y-5">
            {/* Post Title  */}
            <div className='postTitle'>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {postData?.title}
          </h1>
        </div>
          <div className='authoDetails flex items-center justify-center md:justify-end space-x-2'>
                        {/* Author Image  */}
            <Image alt='Author' src={urlFor(postData?.author.image).url()} width={40} height={40} className='rounded-full' />
              <div className='flex flex-col'>
            <p className="text-xs font-semibold text-gray-800 dark:text-gray-300">
                          {/* Author Name  */}
                          {postData?.author.name}
            </p>
            <p className="text-xs font-medium text-gray-400">
             {/* Formated Published Date of the post  */}
              {new Date(postData?._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
              </div>
          </div>
        </div>


      </div>
    </header>
      
      {/* Main page for whole content of the post */}
      <main className='w-full p-2 md:max-w-4xl md:p-5 mx-auto'>
                    {/* Using portable text for rendering content of the post */}
                    <PortableText value={postData?.body} components={RichTextComponent} />
                    
      </main>


        {/* Rendering related posts*/}


        {postData.related.length != 0 &&
              <div className='bottomContainer'>
              <h2 className="mb-4 mt-5 text-2xl lg:text-4xl tracking-tight font-bold text-gray-900 dark:text-white">You might also like</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 py-2 gap-x-6 mt-5 border-gray-200 dark:border-gray-700">

          {postData.related?.map((blog) => (
            <BlogCard
              key={blog?.slug.current}
              author={"Sujan Thapa"}
              slug={`/blog/${blog?.slug.current}`}
              creationDate={new Date(blog?._createdAt).toLocaleDateString(
                "en-US",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              )}
              title={blog.title}
              mainImg={urlFor(blog?.mainImage).url()}
              // tags={[
              //   { title: "NextJS", slug: "something" },
              //   { title: "Javascript", slug: "javascript" },
              // ]}
              description={blog?.description}
            />
          ))}
            
          </div>
  
  </div> 
          }



  </div>


      
  )
}

export default Blog




