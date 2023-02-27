import { useSession } from "next-auth/react"
import LoginButton from "./LoginButton"
export default function NavBar(){
const { data: session } = useSession()
    return (
        <>
        <div className="navbar bg-primary fixed top-0 right-0 left-0">
          <div className="flex-1">
            <a href="/"><img className="m-3 mx-9" src="/logo.svg"></img></a>
          </div>
          <div className="flex-none">
            <LoginButton/>
          </div>
        </div>
      </>
    )
}