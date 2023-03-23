import { useRouter } from "next/router";
import { Fragment } from "react";

import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  const router = useRouter();

  function authenticate() {
    router.push('/homePage');
  }

  return (
    <Fragment>
      <div className="flex h-screen bg-neutral-900">
        <div className="m-auto w-96">
          <div className="mb-10">
            <h1 className="text-center text-4xl text-neutral-50">LOGIN</h1>
          </div>
          <AuthForm onLogin={ authenticate }></AuthForm>
        </div>
      </div>
    </Fragment>
  )
}
