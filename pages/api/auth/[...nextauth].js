import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export const authOptions = {
    // Remember to change the GCP URI once deployed
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,

    })
    // ...add more providers here
  ],
  secret:process.env.JWT_SECRET
}

export default NextAuth(authOptions)