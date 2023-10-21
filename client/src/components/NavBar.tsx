import React from "react";
import SignIn from "../components/modals/SignIn";

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
        <li>
          <SignIn />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
