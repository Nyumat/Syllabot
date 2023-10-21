import React from "react";
import { SignIn, SignUp } from "../components/modals/SignIn";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
} from "@clerk/clerk-react";

const NavBar: React.FC = () => {
    return (
        <nav className="nav p-4 max-h-15 bg-slate-100">
            <ul className="flex flex-row justify-between">
                <li className="mr-4">
                    <a href="/">
                        <figure className="w-36">
                            <img
                                src="/lightMode.svg"
                                alt="canvas logo"
                                className="rounded-xl"
                            />
                        </figure>
                    </a>
                </li>
                <SignedIn>
                    <img src="/user-icon.svg" width={40}/>
                </SignedIn>
                <SignedOut>
                    <li>
                        <SignIn />
                        <SignUp />
                    </li>
                </SignedOut>
            </ul>
        </nav>
    );
};

export default NavBar;
