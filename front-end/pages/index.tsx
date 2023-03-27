import { useRouter } from "next/router";
import { Fragment } from "react";
import Cookies from "js-cookie";

import AuthForm from "@/components/auth/AuthForm";
import axiosClient from "@/configs/axios.config";

export default function LoginPage() {
  const router = useRouter();

  if (Cookies.get('accessToken')) {
    router.back();
  }

  async function authenticate(email?: string, password?: string): Promise<void> {

    const { data } = await axiosClient.post('/auth/login',{email, password});

    Cookies.set('accessToken', data.accessToken);
    Cookies.set('refreshToken', data.refreshToken);

    router.push(`/homePage`);
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
