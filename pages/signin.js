import React from 'react'
import { getProviders, signIn, getSession } from "next-auth/react";
import Link from 'next/link';

const signin = ({ providers }) => {
    return (
        <div className='bg-secondary w-screen h-screen'>
            <div className='flex items-center justify-center flex-col w-screen h-screen'>
                <Link href="/"><img className="m-3" src="/logo_circle.svg"></img></Link>
                {Object.values(providers).map((provider) => {
                    return (
                        <div key={provider.name}>
                            <button className="btn btn-outline btn-primary btn-lg" onClick={() => signIn(provider.id)}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default signin;

export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req });

    if (session) {
        return {
            redirect: { destination: "/" },
        };
    }
    const providers = await getProviders();

    return {
        props: { providers: providers ?? [] },
    }
}