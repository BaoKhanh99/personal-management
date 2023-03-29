import { useAuthHandler } from "@/utils/auth-handler"

export default function HomePage() {
  useAuthHandler();

  return <p>This is a Home Page</p>
}
