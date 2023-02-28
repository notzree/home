/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react";
import { CgProfile } from 'react-icons/cg';
import { IconContext } from "react-icons";

export default function LoginButton() {
  const { data: session } = useSession();
    console.log(session?.user.image);
  if (session) {
    return (
      <>
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="mx-8 btn-ghost btn-circle avatar btn">
            <div className="rounded-full">
              <img
                alt="Profile Photo"
                src={
                  session
                    ? session.user.image
                    : <CgProfile/>
                }
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 mx-7 w-52 bg-secondary p-2 shadow">
            <li className="mx-2">
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <button onClick={() => signOut()} className="btn btn-primary text-secondary m-2">
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="dropdown-end dropdown">
        <label tabIndex={0} className="mx-8 btn-ghost btn-circle avatar btn">
          <button className="rounded-full" onClick={() => signIn()}>
            <IconContext.Provider value={{color: "#5E6697", size: "3.5em", className: "drop-shadow-md"}}>
              <div>
                <CgProfile/>
              </div>
            </IconContext.Provider>
          </button>
        </label>
      </div>

    </>
  );
}
