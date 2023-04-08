import { useRef } from 'react'

export default function AuthForm({
  onLogin,
}: {
  onLogin: (email?: string, password?: string) => void
}) {
  const emailInputRef = useRef<HTMLInputElement | null>(null)
  const passwordInputRef = useRef<HTMLInputElement | null>(null)

  function LoginHandler(event: { preventDefault: () => void }) {
    event.preventDefault()

    const enteredEmail = emailInputRef.current?.value
    const enteredPassword = passwordInputRef.current?.value

    onLogin(enteredEmail, enteredPassword)
  }

  return (
    <form className="items-center" onSubmit={LoginHandler}>
      <div className="grid grid-cols-1 space-y-4">
        <div>
          <input
            className="w-full rounded-lg border-b-2 border-neutral-200 bg-neutral-800 p-1 text-neutral-50 focus:border-amber-600 focus:outline-none"
            type="text"
            placeholder="Email"
            ref={emailInputRef}
          />
        </div>
        <div>
          <input
            className="w-full rounded-lg border-b-2 border-neutral-200 bg-neutral-800 p-1 text-neutral-50 focus:border-amber-600 focus:outline-none"
            type="password"
            placeholder="Password"
            ref={passwordInputRef}
          />
        </div>
        <div className="flex justify-center">
          <button className="h-9 w-full items-center rounded-lg bg-amber-600 text-center text-xl text-neutral-50">
            Login
          </button>
        </div>
      </div>
    </form>
  )
}
