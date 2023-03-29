import { useRef } from "react";

export default function AuthForm({ onLogin }: { onLogin: (email?: string, password?: string) => void;}) {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  function LoginHandler(event: { preventDefault: () => void; }) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    onLogin(enteredEmail, enteredPassword);
  }

  return(
    <form className="items-center" onSubmit={LoginHandler}>
      <div className="grid grid-cols-1 space-y-4">
        <div>
          <input
            className="bg-neutral-800 rounded-lg w-full p-1 border-b-2 border-neutral-200 focus:outline-none focus:border-amber-600 text-neutral-50"
            type="text"
            placeholder="Email"
            ref={ emailInputRef }
          />
        </div>
        <div>
          <input
            className="bg-neutral-800 rounded-lg w-full p-1 border-b-2 border-neutral-200 focus:outline-none focus:border-amber-600 text-neutral-50"
            type="password"
            placeholder="Password"
            ref={ passwordInputRef }
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-amber-600 items-center text-center text-xl text-neutral-50 w-full h-9 rounded-lg">Login</button>
        </div>
      </div>
    </form>
  )
}
