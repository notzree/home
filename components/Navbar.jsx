import { useSession } from "next-auth/react"
import LoginButton from "./LoginButton"
import Link from 'next/link';

export default function NavBar(){
const { data: session } = useSession()
    return (
        <>
        <div className="navbar bg-primary fixed top-0 right-0 left-0">
          <div className="flex-1">
            <Link href="/"><img className="m-3 mx-9" src="/logo.svg"></img></Link>
          </div>
          <div className="flex-none">
            <LoginButton/>
          </div>
        </div>
      </>
    )
}