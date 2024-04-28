"use client";

import { FaCloudArrowUp } from "react-icons/fa6";

export default function CreateBankAccountPage() {
  return (
    <div>
      <div className="mt-5 mb-10 text-center text-slate-900">
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold">ADD BANK ACCOUNT</h2>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="ml-1 w-2/3 place-content-center">
          <form>
            <div className="grid gap-6 grid-cols-2">
              <div className="col-start-1 col-end-3">
                <div className="relative">
                  <select
                    id="countries"
                    className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-rose-600 focus:border-rose-600 block w-full p-2.5"
                  >
                    <option value="#">Select a bank</option>
                    <option value="test"> test</option>;
                  </select>

                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-50 px-2 peer-focus:px-2 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Bank Name
                  </label>
                </div>
              </div>
              <div>
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-slate-900 bg-transparent rounded-lg border-1 border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                    placeholder=" "
                  />

                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-50 px-2 peer-focus:px-2 peer-focus:text-sky-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Account number
                  </label>
                </div>
              </div>
              <div>
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-slate-900 bg-transparent rounded-lg border-1 border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                    placeholder=" "
                  />

                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-50 px-2 peer-focus:px-2 peer-focus:text-sky-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Alias
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-center w-full col-start-1 col-end-3">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaCloudArrowUp />
                    <p className="mb-2 text-sm text-slate-500 ">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop QR code image
                    </p>
                    <p className="text-xs text-slate-500">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <button
                type="button"
                className="text-slate-50 bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-base px-5 py-3 text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
