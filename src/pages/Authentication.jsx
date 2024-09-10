import React, { useEffect } from 'react';
import { Logo } from "../assets";
import { Footer } from '../containers';
import { AuthButtonWithProvider, MainSpinner } from '../components';

import { FaGithub, FaGoogle } from 'react-icons/fa6';
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
    const { data, isLoading, isError } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && data) {
            navigate("/", { replace: true });
        }
    }, [isLoading, data, navigate]);

    if (isLoading) {
        return <MainSpinner />;
    }

    return (
        <div className="auth-section">
            {/* Top section */}
            <img src={Logo} alt="logo" className="w-12 h-auto object-contain" />

            {/* Main section */}
            <div className="w-full flex flex-1 flex-col items-center justify-center gap-6">
                <h1 className="text-3xl lg:text-4xl text-blue-700">Welcome to Leresume</h1>
                <p className="text-base text-gray-600">Fastest way to create ATS resumes</p>
                <h2 className="text-2xl text-gray-600">Authenticate</h2>

                <div className="w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6">
                    <AuthButtonWithProvider
                        Icon={FaGoogle}
                        label="Sign in with Google"
                        provider="GoogleAuthProvider"
                    />
                    <AuthButtonWithProvider
                        Icon={FaGithub}
                        label="Sign in with Github"
                        provider="GithubAuthProvider"
                    />
                </div>
            </div>

            {/* Footer section */}
            <Footer />
        </div>
    );
};

export default Authentication;
