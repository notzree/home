import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <>
      <main className="h-screen w-screen bg-primary">
        <div className=" flex h-screen w-screen items-center justify-center">
          <form className="form-control w-full max-w-xs ">
            <label htmlFor="text" className="label">
              <span className=" label-text text-secondary">Pet Name</span>
            </label>
            <input
              id="listingName"
              type="text"
              placeholder="Type here"
              class="input-bordered input my-2 w-full max-w-xs"
            />

            <label htmlFor="text" className="label">
              <span className=" label-text text-secondary">
                Rehoming Fee (leave as 0 for free / no cost)
              </span>
            </label>
            <input
              id="listingPrice"
              type="text"
              placeholder="Type here"
              class="input-bordered input my-2 w-full max-w-xs"
            />

            <div className="flex flex-row items-center justify-evenly">
              <label htmlFor="text" className="label">
                <span className=" label-text text-secondary">Sex:</span>
              </label>

              <label className="label">
                <span className="label-text text-secondary">Female</span>
              </label>
              <input
                id="listingGenderF"
                type="radio"
                name="radio-10"
                className="radio-secondary radio checked:bg-red-500"
                checked
              />
              <label className="label">
                <span className="label-text text-secondary">Male</span>
              </label>
              <input
                id="listingGenderM"
                type="radio"
                name="radio-10"
                className="radio-secondary radio checked:bg-blue-500"
                checked
              />
            </div>
            <div>
              <label className="label" htmlFor="text">
                <span className="label-text text-secondary">Animal Category</span>
              </label>
              <select class="select-secondary select w-full max-w-xs">
                <option disabled selected>
                  Pick your Category
                </option>
                <option>Dogs</option>
                <option>Cats</option>
                <option>Rabits</option>
                <option>Birds</option>
                <option>Fish</option>
                <option>Rodents / Related</option>
                <option>Other</option>
              </select>
            </div>
            <button className="btn-secondary btn my-2">Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}
