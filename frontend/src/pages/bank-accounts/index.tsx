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
      <div className="mt-5 mb-10 text-center text-slate-900">
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold">
            MY BANK ACCOUNTS AND E-WALLETS
          </h2>
        </div>
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
              <div className="max-w-sm bg-slate-50 border border-slate-200 rounded-lg shadow ">
                <Link to="#">
                  <StaticImage
                    className="rounded-t-lg"
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                    alt={""}
                  />
                </Link>
                <div className="p-5 text-center">
                  <Link to="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 ">
                      {bankAccount.bank.name}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-slate-700 ">
                    {bankAccount.accountNumber}
                  </p>
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
