import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
export default function CreateListingButton (){
    const { data: session } = useSession();
    const router = useRouter();
    const createListingHandler = () => { 
        //Redirects you to the createListingPage
        router.push("/createListingPage")
    }

    return(
        <>
        <div className="">
        { session ?
            <button className="btn btn-secondary" onClick={createListingHandler}>
        Create Listing
        </button> : 
        <button className="btn btn-secondary " onClick={()=>signIn()}>
        Create Listing
        </button> 
    }
        </div>
        </>
    )

}