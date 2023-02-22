/* eslint-disable @next/next/no-img-element */
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img
              alt = "Profile Photo"
                src={
                  session
                    ? session.user.image
                    : "https://img.favpng.com/20/11/12/computer-icons-user-profile-png-favpng-0UAKKCpRRsMj5NaiELzw1pV7L.jpg"
                }
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a className="justify-between">{session.user.name}</a>
            </li>
            <li>
              <button onClick={() => signOut()} className="btn-primary btn">
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
        <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
          <div className="w-10 rounded-full">
            <button className="w-10 rounded-full" onClick={() => signIn()}>
              <img src="https://img.favpng.com/20/11/12/computer-icons-user-profile-png-favpng-0UAKKCpRRsMj5NaiELzw1pV7L.jpg" />
            </button>
          </div>
        </label>
      </div>
    </>
  );
}
