export default function AuthForm(props: { onLogin: () => void; }) {
  function LoginHandler(event: { preventDefault: () => void; }) {
    event.preventDefault();
    props.onLogin();
  }

  return(
    <form className="items-center" onSubmit={LoginHandler}>
      <div className="grid grid-cols-1 space-y-4">
        <div>
          <input
            className="bg-neutral-800 rounded-lg w-full p-1 border-b-2 border-neutral-200 focus:outline-none focus:border-amber-600 text-neutral-50"
            type="text"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className="bg-neutral-800 rounded-lg w-full p-1 border-b-2 border-neutral-200 focus:outline-none focus:border-amber-600 text-neutral-50"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-amber-600 items-center text-center text-xl text-neutral-50 w-full h-9 rounded-lg">Login</button>
        </div>
      </div>
    </form>
  )
}
