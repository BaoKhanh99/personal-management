import { Fragment } from 'react'

function Layout() {
  return (
    <Fragment>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
          <a
            href="https://flowbite.com/"
            className="mb-5 flex items-center pl-2.5"
          >
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              BK Manager
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <i className="fa-solid fa-house"></i>
                <span className="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <i className="fa-solid fa-pen-to-square"></i>
                <span className="ml-3 flex-1 whitespace-nowrap">
                  Add To-dos
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <i className="fa-solid fa-user"></i>
                <span className="ml-3 flex-1 whitespace-nowrap">Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                <span className="ml-3 flex-1 whitespace-nowrap">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </Fragment>
  )
}

export default Layout
