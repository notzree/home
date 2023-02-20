import NavBar from '@/components/Navbar'
import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
    <SessionProvider session={session}>
      <NavBar/>
    <Component {...pageProps} />
    </SessionProvider>
    
    </>
  )
}
