import React from 'react';
import { GoogleAuthProvider, GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from '../config/firebase.config';
import { FaChevronRight } from 'react-icons/fa6';

const AuthButtonWithProvider = ({ Icon, label, provider }) => {
    
    const handleClick = async () => {
        try {
            let authProvider;
            switch (provider) {
                case "GoogleAuthProvider":
                    authProvider = new GoogleAuthProvider();
                    break;
                case "GithubAuthProvider":
                    authProvider = new GithubAuthProvider();
                    break;
                default:
                    authProvider = new GoogleAuthProvider(); // Default to Google if no valid provider
            }

            // Perform sign in
            await signInWithRedirect(auth, authProvider);
            console.log(`${provider} sign-in successful`);
        } catch (err) {
            console.error(`Error during sign-in: ${err.message}`);
        }
    };

    return (
        <div onClick={handleClick} className="w-full px-4 py-3 rounded-md border-2 border-blue-700 flex items-center justify-between cursor-pointer group hover:bg-blue-700 active:scale-95 duration-150 hover:shadow-md">
            <Icon className="text-txtPrimary text-xl group-hover:text-white" />
            <p className="text-txtPrimary text-lg group-hover:text-white">{label}</p>
            <FaChevronRight className="text-textPrimary text-base group-hover:text-white" />
        </div>
    );
};

export default AuthButtonWithProvider;
