import React from 'react'

import { Logo } from "../assets";
import { Footer } from '../containers';
import { AuthButtonWithProvider } from '../components';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

function Authentication() {
    return (
        <div className='auth-section'>
            {/* top section */}
            <img src={Logo} alt='' className='w-12 h-auto object-contain' />

            {/* main section */}
            <div className="w-full flex flex-1 flex-col items-center justify center gap-6">
                <h1 className='text-3xl lg:text-4xl text-blue-700'>Welcome to Expressume</h1>
                <p className='text-base text-gray-600'>Express way to creeate resume</p>
                <h2 className='text-2xl text-gray-600'>Authenticate</h2>

                <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
                    <AuthButtonWithProvider
                        Icon={FaGoogle}
                        label={"Signin with Google"} 
                        provider={"GoogleAuthProvider"} />
                    <AuthButtonWithProvider 
                        Icon={FaGithub} 
                        label={"Signin with Github"} 
                        provider={"GithubAuthProvider"} />
                </div>
            </div>

            {/* footer section */}
            <Footer />
        </div>
    )
}

export default Authentication