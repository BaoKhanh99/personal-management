import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { Layout } from "../../layout";
import { StaticImage } from "gatsby-plugin-image";
import axiosClient from "../../config/axios.config";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const IndexPage: React.FC<PageProps> = () => {
  const [bankAccounts, setBankAccounts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setBankAccounts((await axiosClient.get("/bank-accounts")).data);
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="mt-5 mb-10">
        <div className="mb-10">MY BANK ACCOUNTS AND E-WALLETS</div>
        <div className="text-end mr-10">
          <Link to="">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-slate-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <FontAwesomeIcon icon={faPlus} /> Add bank account
            </button>
          </Link>
        </div>
      </div>

      <div className="ml-1 grid grid-cols-4 gap-8">
        {bankAccounts?.map((bankAccount: any) => {
          return (
            <div key={bankAccount.id}>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to="#">
                  <StaticImage
                    className="rounded-t-lg"
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                    alt={""}
                  />
                </Link>
                <div className="p-5">
                  <Link to="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {bankAccount.bank.name}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {bankAccount.accountNumber}
                  </p>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-slate-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Detail
                  </button>

                  {/* <Link
                    to="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Detail
                  </Link> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Bank accounts Page</title>;
