import "@styles/globals.css";
import Nav from "components/Nav";
import Providers from "@components/Providers";
import Head from "next/head";
export const metadata = {
    title: "CrowFunding posts",
    description: "Leading platform for the biggest thinkers",
}
const RootLayout = ({children}) => {
  return (
      <html lang="en">        
        <body>
            <Providers>
            <div className="main">
                <div className="gradient"/>                                    
            </div>            
                <main className="app">
                <Nav/>
                {children}                
                </main>                       
            </Providers>    
            
        </body>        
      </html>
  )
}

export default RootLayout
