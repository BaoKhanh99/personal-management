"use client";

import { CustomFlowbiteTheme, Sidebar } from "flowbite-react";
import "./globals.css";
import {
  FaBook,
  FaMoneyCheckDollar,
  FaPowerOff,
  FaUsersBetweenLines,
  FaWallet,
} from "react-icons/fa6";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const customTheme: CustomFlowbiteTheme["sidebar"] = {
    root: {
      base: "fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0",
      collapsed: {
        on: "w-16",
        off: "w-64",
      },
      inner:
        "h-full overflow-y-auto overflow-x-hidden rounded bg-slate-800 px-3 py-4",
    },
    collapse: {
      button:
        "group flex w-full items-center rounded-lg p-2 text-base font-normal text-slate-50 transition duration-75 hover:bg-slate-50 hover:text-slate-900",
      icon: {
        base: "h-6 w-6 text-slate-50 transition duration-75 group-hover:text-slate-900",
        open: {
          off: "",
          on: "text-slate-50",
        },
      },
      label: {
        base: "ml-3 flex-1 whitespace-nowrap text-left hover:text-slate-900",
        icon: {
          base: "h-6 w-6 transition delay-0 ease-in-out",
          open: {
            on: "rotate-180",
            off: "",
          },
        },
      },
      list: "space-y-2 py-2",
    },
    cta: {
      base: "mt-6 rounded-lg bg-slate-800 p-4",
      color: {
        blue: "bg-cyan-50 dark:bg-cyan-900",
        dark: "bg-dark-50 dark:bg-dark-900",
        failure: "bg-red-50 dark:bg-red-900",
        gray: "bg-alternative-50 dark:bg-alternative-900",
        green: "bg-green-50 dark:bg-green-900",
        light: "bg-light-50 dark:bg-light-900",
        red: "bg-red-50 dark:bg-red-900",
        purple: "bg-purple-50 dark:bg-purple-900",
        success: "bg-green-50 dark:bg-green-900",
        yellow: "bg-yellow-50 dark:bg-yellow-900",
        warning: "bg-yellow-50 dark:bg-yellow-900",
      },
    },
    item: {
      base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-slate-50 hover:bg-slate-50 hover:text-slate-900",
      active: "bg-gray-100",
      collapsed: {
        insideCollapse: "group w-full pl-8 transition duration-75",
        noIcon: "font-bold",
      },
      content: {
        base: "flex-1 whitespace-nowrap px-3",
      },
      icon: {
        base: "h-6 w-6 flex-shrink-0 transition duration-75",
        // "active": "text-slate-800"
      },
      label: "",
      listItem: "",
    },
    items: {
      base: "",
    },
    itemGroup: {
      base: "mt-4 space-y-2 border-t border-slate-200 pt-4 first:mt-0 first:border-t-0 first:pt-0",
    },
    logo: {
      base: "mb-5 flex items-center pl-2.5 text-slate-50",
      collapsed: {
        on: "hidden",
        off: "self-center whitespace-nowrap text-xl font-semibold",
      },
      img: "mr-3 h-6 sm:h-7",
    },
  };

  return (
    <html lang="en">
      <body className="text-slate-900">
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          theme={customTheme}
        >
          <Sidebar.Logo href="#" img="" imgAlt="Flowbite logo">
            PersonalManager
          </Sidebar.Logo>

          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Collapse label="Bank Accounts" icon={FaMoneyCheckDollar}>
                <Sidebar.Item href="/bank-accounts">
                  List Bank Accounts
                </Sidebar.Item>
                <Sidebar.Item href="#">create Bank Account</Sidebar.Item>
                <Sidebar.Item href="#">Create Bank Or E-Wallet</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#" icon={FaBook}>
                Books
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={FaUsersBetweenLines}>
                Accounts
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={FaWallet}>
                Money Management
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={FaPowerOff}>
                Logout
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        <div className="p-4 sm:ml-72">{children}</div>
      </body>
    </html>
  );
}
