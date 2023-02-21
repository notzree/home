import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src = {session? session.user.image: "https://img.favpng.com/20/11/12/computer-icons-user-profile-png-favpng-0UAKKCpRRsMj5NaiELzw1pV7L.jpg"}/>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a className="justify-between">
          {session.user.name}
          </a></li>
        <li><button onClick={() => signOut()} className = "btn btn-primary">Sign out</button></li>
      </ul>
    </div>
      </>
    )
  }
  return (
    <>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <button className="w-10 rounded-full" onClick={()=>signIn()}>
          <img src = "https://img.favpng.com/20/11/12/computer-icons-user-profile-png-favpng-0UAKKCpRRsMj5NaiELzw1pV7L.jpg"/>
          </button>
        </div>
      </label>
    </div>
    </>
  )
}