import '@/app/globals.css'

export default function StudioLayout({ children }) {
  return (
    
    <html lang="en">
      <body className='dark:bg-slate-900'>
          {children}
      </body>
    </html>
  )
}
