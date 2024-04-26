import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faFile, faMoneyCheckDollar, faPowerOff, faUser, faUsersBetweenLines, faWallet } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({}: Readonly<{}>) {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-slate-800">
        <Link href={"/"} className="flex items-center ps-2.5 mb-5">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-50">
            Personal management
          </span>
        </Link>
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href={"#"}
              className="flex items-center p-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900 group"
            >
              <FontAwesomeIcon icon={ faWallet }  />
              <span className="ms-3">Money management</span>
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="flex items-center p-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900 group"
            >
              <FontAwesomeIcon icon={faBook} />
              <span className="ms-3">My books</span>
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="flex items-center p-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900 group"
            >
              <FontAwesomeIcon icon={faUsersBetweenLines} />
              <span className="ms-3">My accounts</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/bank-accounts"}
              className="flex items-center p-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900 group"
            >
              <FontAwesomeIcon icon={faMoneyCheckDollar} />
              <span className="ms-3">My Bank accounts</span>
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="flex items-center p-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900 group"
            >
              <FontAwesomeIcon icon={faFile} />
              <span className="ms-3">Portfolio</span>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-slate-200 ">
          <li>
            <Link
              href={"#"}
              className="flex items-center p-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900 group"
            >
              <FontAwesomeIcon icon={faUser} />
              <span className="ms-3">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="flex items-center p-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900 group"
            >
              <FontAwesomeIcon icon={faPowerOff} />
              <span className="ms-3">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
