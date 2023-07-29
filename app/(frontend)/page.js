
// import Categories from "@/components/Categories";
import { client } from "@/lib/sanity";
import urlFor from "@/lib/sanityImageUrl";
import dynamic from "next/dynamic"

//Dynamically importing Banner.
const Banner = dynamic(() => import('@/components/Banner'), {
    ssr: false,
    loading: () => <div role="status" className="animate-pulse container h-[40vh] sm:h-[50vh]  mx-auto md:h-[60vh] lg:h-[50vh] max-w-screen-sm p-6  dark:from-inherit dark:to-inherit relative dark:bg-gray-800">
        <svg className="w-full h-full text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>

    <span className="sr-only">Loading...</span>
</div>
})

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

//Metadata for the home page.
export const metadata = {
  title: 'Shree Rama Blog',
  description: 'Website made for spritual blogs.',
}

//Revalidating data after every 30 secs which will serve the cached pages and rebuild them after 30 secs. (UPDATES CAN ONLY BE SEEN AFTER 30 seconds)
export const revalidate = 30;

//Fetching all data of posts.
const getData = async () => {
      const query = '*[_type == "post"]';
      const data = await client.fetch(query);
      return data;
}


//Fetching all data of banners (slider images).
const getBannerData = async () => {
  const query = '*[_type == "banner"]';
  const data = await client.fetch(query);
  return data;
}



export default async function Home() {
    const BlogData = await getData();
    const bannerData = await getBannerData();
    
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 min-h-screen">
      {/* Rendering banner images or sliders only if there are data available for banners. */}
          {
            bannerData && (
              <Banner images={bannerData} />
              
            ) 
          }
            
      {/* <Categories /> */}
 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 py-2 gap-x-6 mt-5 border-gray-200 dark:border-b-gray-700">
          
      {/* Rendering Blog posts card only if there are data available for Blog Posts. */}
      {
        BlogData &&
          BlogData.map((blog) => (
            <BlogCard key={blog?.slug.current} author={"Sujan Thapa"} slug={`/blog/${blog?.slug.current}`} creationDate= {new Date(blog?._createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })} title={blog.title} mainImg={urlFor(blog?.mainImage).url()} hcode={blog?.bg_hex_code} tags={[{title: 'NextJS', slug: "something"}, {title: "Javascript", slug:"javascript"}]} description={blog?.body[0].children[0].text} />
            
            ))
      }
      
 
        </div>
  </div>
  )
}

