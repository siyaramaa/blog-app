import { client } from "@/lib/sanity";
import urlFor from "@/lib/sanityImageUrl";
import dynamic from "next/dynamic"
import Link from "next/link";

//Dynamically importing Blog Cards.
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

//Fetching all data of posts.
const getBlogByQuery = async (searchQuery) => {
      const query = `*[_type == "post" && [title,description] || body[].children[].text match "${searchQuery}"]`; 



      const data = await client.fetch(query);
      return data;
}



export default async function SearchPage({
    params,
    searchParams,
    }) {
        const query = searchParams.q;
        const searchedBlogs = await getBlogByQuery(query);  
        
        return (
            <div className="divide-y divide-gray-200 dark:divide-gray-700 min-h-screen">

        {/* Rendering Blog posts card only if there are data available for Blog Posts. */}
            {
                    searchedBlogs.length != 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 py-2 gap-x-6 mt-5 border-gray-200 dark:border-b-gray-700">
                                {

                                    searchedBlogs.map((blog) => (
                                        <BlogCard key={blog?.slug.current} author={"Sujan Thapa"} slug={`/blog/${blog?.slug.current}`} creationDate= {new Date(blog?._createdAt).toLocaleDateString("en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })} title={blog.title} mainImg={urlFor(blog?.mainImage).url()} hcode={blog?.bg_hex_code} tags={[{title: 'NextJS', slug: "something"}, {title: "Javascript", slug:"javascript"}]} description={blog?.body[0].children[0].text} />
                                        
                                        ))
                                    } 
                            </div>

                    ): <section className=" mx-auto">
                    <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                            <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                            </p>
                            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Results not found for {query}</h1>
                            <p className="mt-4 text-gray-500 dark:text-gray-400">The blog you are looking for doesn&apos;t exist. Here are some helpful links:</p>
                    
                            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                                <Link href={'/'} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                    </svg>
                    
                    
                                    <span>Go back</span>
                                </Link>
                    
                                <Link href={'/'} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                                    Take me home
                                </Link>
                            </div>
                        </div>
                    </div>
                    </section>

            }


        
 

</div>
  )
}

