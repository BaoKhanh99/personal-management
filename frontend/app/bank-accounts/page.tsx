"use client";

import axiosClient from "@/config/axios.config";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function BankAccountPage() {
  const [bankAccounts, setBankAccounts] = useState([{
    id: 'abc',
    accountNumber: 'ádfsdf',
    bank: {
      name: 'xyz'
    }
  }]);

  useEffect(() => {
    async function fetchData() {
      setBankAccounts((await axiosClient.get("/bank-accounts")).data);
    }

    fetchData();
  }, []);

  return (
    <div className="mt-5 mb-10 text-center text-slate-900">
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold">
          MY BANK ACCOUNTS AND E-WALLETS
        </h2>
      </div>
      <div className="text-end mr-10">
        <Link
          href={'/bank-accounts/create'}
          type="button"
          className="text-slate-50 bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-base px-5 py-3 text-center "
        >
          <FontAwesomeIcon icon={faPlus} /> Add bank account
        </Link>
      </div>

      <div className="ml-1 grid grid-cols-4 gap-8">
      <div key=''>
              <div className="max-w-sm bg-slate-50 border border-slate-200 rounded-lg shadow ">
                <Link href="#">
                  <img

                    className="rounded-t-lg"
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                    alt={""}
                  />
                </Link>
                <div className="p-5 text-center">
                  <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 ">
                      name
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-slate-700 ">
                    name
                  </p>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}
