
import Categories from "@/components/Categories";
import { client } from "@/lib/sanity";
import dynamic from "next/dynamic"

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

export const metadata = {
  title: 'Blog-web-app',
  description: 'Website for blogging.',
}

const getData = async () => {
      const query = '*[_type == "post"]';
      const data = await client.fetch(query);
      return data;
}


export default async function Home() {
    const BlogData = await getData();
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 min-h-screen border-b">

        
      <Categories />
 
      <div className="grid grid-cols-1 relative  gap-y-3 py-2 gap-x-6 mt-5 border-gray-200 dark:border-b-gray-700">

      {
        BlogData.map((blog) => (
          <BlogCard key={blog.slug.current} author={"Sujan Thapa"} slug={`/blog/${blog.slug.current}`} creationDate= {new Date(blog._createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })} title={blog.title} hcode={blog.bg_hex_code} tags={[{title: 'NextJS', slug: "something"}, {title: "Javascript", slug:"javascript"}]} description={blog.body[0].children[0].text} />

        ))
      }
      
 
        </div>
  </div>
  )
}

