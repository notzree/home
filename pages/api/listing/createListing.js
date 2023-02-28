import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import client from "@/lib/prismadb"
export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    if (session) {
        const body = JSON.parse(req.body);
        // console.log(body);
        const userId = await prisma.user.findUnique({
            where: {
              email: body.email
            },
          })
       
          var data = {
            // owner: body.data.owner,
            owner: userId.id,
            listingLocationCoords: "Empty for now",
            listingCategory:body.data.listingCategory,
            listingName:body.data.listingName,
            listingSex: body.data.listingSex,
            listingAge: body.data.listingAge,
            listingPrice: body.data.listingPrice,
            listingDescription: body.data.listingDescription
          }
        const createdListing = await client.listings.create({data:data})

    } else {
        res.status(400).json({ message: "Please Sign in"})
    }
  }
  