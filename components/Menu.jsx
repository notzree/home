import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { IoPaw } from "react-icons/io5";
import { BsCameraFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useRouter } from 'next/router';

export default function Menu() {
    const router = useRouter()

    
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <button className="rounded-full" onClick={()=>router.push("/")}>
                    <IconContext.Provider value={{ color: "#5E6697", size: "2.5em", className: "mb-5 drop-shadow-md" }}>
                        <div><AiFillHome /></div>
                    </IconContext.Provider>
                </button>
                <button className="rounded-full" onClick={()=>router.push("/myAccount")}>
                    <IconContext.Provider value={{ color: "#5E6697", size: "2.5em", className: "mb-5 drop-shadow-md" }}>
                        <div><IoPaw /></div>
                    </IconContext.Provider>
                </button>
                <button className="rounded-full" onClick={()=>router.push("/createListingPage")}>
                    <IconContext.Provider value={{ color: "#5E6697", size: "2.5em", className: "mb-5 drop-shadow-md" }}>
                        <div><BsCameraFill /></div>
                    </IconContext.Provider>
                </button>
                <button className="rounded-full" onClick={()=>router.push("/")}>
                    <IconContext.Provider value={{ color: "#5E6697", size: "2.5em", className: "mb-5 drop-shadow-md" }}>
                        <div><FaHeart /></div>
                    </IconContext.Provider>
                </button>
                <button className="rounded-full" onClick={()=>router.push("/")}>
                    <IconContext.Provider value={{ color: "#5E6697", size: "2.5em", className: "mb-5 drop-shadow-md" }}>
                        <div><AiFillMessage /></div>
                    </IconContext.Provider>
                </button>
            </div>
        </>
    )
}