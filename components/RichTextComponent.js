import urlFor from '@/lib/sanityImageUrl';
import Image from 'next/image';

export const RichTextComponent = {
    
    types: {
        image: ({value}) => {
                return (
                    <div className='relative w-full h-56 sm:h-96 m-4 mx-auto'>
                    <Image
                    src={urlFor(value).url()}  
                        alt={value.alt || ' '}
                        loading="lazy"
                      className='object-contain mx-auto'
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
                <blockquote className='border-l-cyan-400 border-l-4 pl-5 py-5 my-5'>{children}</blockquote>
            ),
            normal: ({children}) => (
                <p className="text-xl">{children}</p>

            ),
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
  