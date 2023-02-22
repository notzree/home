import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import client from "@/lib/prismadb"
export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    if (session) {
        const createdListing = client.listings.create({data:req.body})
    } else {
        res.status(400).json({ message: "Please Sign in"})
    }
  }
  