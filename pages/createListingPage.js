import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";



export default function Home() {
    const { data: session } = useSession();
    const router = useRouter();
    console.log(session.user)
    const  handleSubmit = async (e)=>{
        if(!session){
            router.push("/createListingPage");
        }
        e.preventDefault();
        var listingsex = "";
        if(e.target.listingGenderF.checked){
            listingsex = "Female"
        } else{
            listingsex = "Male"
        }
       var userEmail = session.user.email;

        var body = {
            data:{
                listingLocationCoords: "Empty for now",
                listingCategory: "Rabbit",
               listingName:e.target.listingName.value,
               listingSex: listingsex,
               listingAge: parseInt(e.target.listingAge.value) ,
               listingPrice: parseInt(e.target.listingPrice.value),
               listingDescription: e.target.listingDescription.value
            },

            email:userEmail
        }
        const response = await fetch("/api/listing/createListing",{
            method: "POST",
            body:JSON.stringify(body)
        })
        if (!response.ok) {
            throw new Error(response.statusText);
          }
    }
  return (
    <>
      <main className="h-screen w-screen bg-primary">
        <div className=" mt-10 flex h-screen w-screen items-center justify-center">
          <form className="form-control w-full max-w-xs "
          onSubmit={handleSubmit}
          >
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
              <span className=" label-text text-secondary">Pet Age</span>
            </label>
            <input
              id="listingAge"
              type="text"
              placeholder="Type here"
              class="input my-2 w-full max-w-xs"
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
              <select id="listingCategory" class="select-secondary select w-full max-w-xs"
              defaultValue={"DEFAULT"}
              >
                <option disabled 
                value = "DEFAULT"
                >
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
            <div className=" w-full flex flex-col justify-center items-center py-2">
                <label className="label" htmlFor="text">
                <span className="label-text text-secondary">Description</span>
              </label>
            <textarea id="listingDescription" className="textarea textarea-bordered textarea-lg w-full h-40" placeholder="Description"></textarea>
            </div>
            <button className="btn-secondary btn my-2">Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}
