import urlFor from '@/lib/sanityImageUrl';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), {
        ssr: false,
        loading: () => <div className='relative w-full max-w-[700px] aspect-[70/45]  my-2  mx-auto'>
        <div className="flex mx-auto items-center justify-center w-full h-96 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
        </div>
        </div>
})

export const RichTextComponent = {
    
    types: {
        image: ({value}) => {
                return (
                    <div className='relative w-full max-w-[700px] aspect-[70/45]  my-2  mx-auto'>

                    <Image
                    src={urlFor(value).url()}  
                        alt={value.alt || ' '}
                        loading="lazy"
                      className='object-cover rounded-xl '
                      fill
                      
                      />

                      </div>
                  );
            }
    },
    list: {
        bullet: ({children}) => (
                <ul className='ml-10 py-5 text-lg list-disc space-y-10'>{children}</ul>
        ),
        number: ({children}) => (
            <ol className='mt-lg list-decimal text-lg'>{children}</ol>
    ),
    },
    block: {
            h1: ({children}) => (
                <h1 className='text-5xl py-5 font-bold'>{children}</h1>
            ),
            h2: ({children}) => (
                <h2 className='text-4xl py-5 font-bold'>{children}</h2>
            ),
            h3: ({children}) => (
                <h2 className='text-3xl py-5 font-bold'>{children}</h2>
            ),
            blockquote: ({children}) => (
                <blockquote className='border-l-violet-500 border-l-4 pl-5 py-5 my-5'>{children}</blockquote>
            ),
            normal: ({children}) => (
                <p className="text-lg md:text-xl py-5">{children}</p>

            ),
            shloka: ({children}) => (
                <div className="mx-auto my-4 rounded SankritQoute max-w-3xl p-5 text-center relative">
                        <p className="font-medium leading-relaxed font-mono max-w-3xl mx-auto">{children}</p>

                    
                     </div>

            )
    },
    // marks: {
    //         links: ({children, value}) => {
    //                 const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
    //                 return (
    //                         <Link>
    //                         </Link>
    //                 )
    //             }
    // }


  }
  