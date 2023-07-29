import '@/app/globals.css'

//Layout for sanity studio.
export default function StudioLayout({ children }) {
  return (
    
    <html lang="en">
      <body className='dark:bg-slate-900'>
          {children}
      </body>
    </html>
  )
}
