"use client";

import axiosClient from "@/config/axios.config";
import Link from "next/link";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setBooks((await axiosClient.get("/books")).data);
    }

    fetchData();
  }, []);


  // temp
  return (
    <div className="mt-5 mb-10 text-center text-slate-900">
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold">
          MY BOOKS
        </h2>
      </div>
      <div className="flex flex-row-reverse mr-10">
        <Button className="text-slate-50 bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-base px-5 py-3 text-center">
          <Link href={"/bank-accounts/create"} className="">
            <div className="flex">
              <div className="text-center pr-1 content-center">
                <FaPlus />
              </div>
              <div>Add Book</div>
            </div>
          </Link>
        </Button>
      </div>

      <div className="ml-1 grid grid-cols-4 gap-8">
        <div key="">
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
              <p className="mb-3 font-normal text-slate-700 ">name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
