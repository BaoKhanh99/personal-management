import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faFile,
  faPowerOff,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className=" drop-shadow-lg bg-slate-800 rounded-r-2xl w-72">
      <nav className="pt-9 grid grid-cols-1 h-screen">
        <div>
          <div className="pb-4">
            <h1 className="p-3 text-xl font-bold text-slate-50">
              Personal management
            </h1>
          </div>
          <ul className="grid justify-items-center text-slate-50 divide-y divide-slate-100">
            <li className=" hover:text-slate-800 hover:bg-slate-50 p-3 w-56 hover:rounded-lg hover:drop-shadow-sm">
              <Link to="#">
                <div className="grid grid-cols-5">
                  <div className="col-start-1 text-center">
                    <FontAwesomeIcon icon={faWallet} />
                  </div>
                  <div className="col-span-4">Money management</div>
                </div>
              </Link>
            </li>

            <li className=" hover:text-slate-800 hover:bg-slate-50 p-3 w-56 hover:rounded-lg hover:drop-shadow-sm">
              <Link to="#">
                <div className="grid grid-cols-5">
                  <div className="col-start-1 text-center">
                    <FontAwesomeIcon icon={faBook} />
                  </div>
                  <div className="col-span-4">My Books</div>
                </div>
              </Link>
            </li>
            <li className=" hover:text-slate-800 hover:bg-slate-50 p-3 w-56 hover:rounded-lg hover:drop-shadow-sm">
              <Link to="#">
                <div className="grid grid-cols-5">
                  <div className="col-start-1 text-center">
                    <FontAwesomeIcon icon={faFile} />
                  </div>
                  <div className="col-span-4">Portfolio</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-t border-slate-50 mt-60">
          <ul className="grid justify-items-center text-slate-50 divide-y divide-slate-100 mt-10">
            <li className=" hover:text-rose-700 hover:bg-slate-50 p-3 w-56 hover:rounded-lg hover:drop-shadow-sm">
              <Link to="#">
                <div className="grid grid-cols-5">
                  <div className="col-start-1 text-center">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className="col-span-4">My Profile</div>
                </div>
              </Link>
            </li>

            <li className=" hover:text-rose-700 hover:bg-slate-50 p-3 w-56 hover:rounded-lg hover:drop-shadow-sm">
              <Link to="#">
                <div className="grid grid-cols-5">
                  <div className="col-start-1 text-center">
                    <FontAwesomeIcon icon={faPowerOff} />
                  </div>
                  <div className="col-span-4">Logout</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
