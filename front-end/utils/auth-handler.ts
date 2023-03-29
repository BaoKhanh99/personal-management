import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuthHandler = () => {
  const router = useRouter();

  useEffect(() => {
    if(!Cookies.get('accessToken')){
      router.replace('/login');
    }
  })
}
