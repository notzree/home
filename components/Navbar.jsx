import { useSession } from "next-auth/react"
import LoginButton from "./login-btn"
export default function NavBar(){
const { data: session } = useSession()
    return (
        <>
        <div className="navbar bg-primary fixed top-0 right-0 left-0">
          <div className="flex-1">
            <img className="m-3" src="/logo.svg"></img>
          </div>
          <div className="flex-none">
            <LoginButton/>
          </div>
        </div>
      </>
    )
}