import Footer from "./Footer"

const LayoutWrapper = ({ children }) => {
  return (

    <div className="mx-auto h-screen max-w-5xl px-4 sm:px-6 xl:max-w-7xl  xl:px-0">
    <div className="flex h-full flex-col justify-between space-y-4">

            <main className="mb-auto">{children}</main>
            {/* <Footer /> */}
          </div>
    
        </div>
  )
}

export default LayoutWrapper

