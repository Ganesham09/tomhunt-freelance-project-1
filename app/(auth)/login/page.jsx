export default function Page() {
  return (
    <main className="w-full flex justify-center items-center h-screen bg-gray-300 p-24">
      <section className=" flex flex-col gap-3 ">
        <div className="flex justify-center">
          <img className="h-12" src="/logo.png" alt="logo" />
        </div>
        <div className="bg-white p-10 rounded-lg shadow-lg min-w-[400px]">
          <h1 className="font-bold text-xl">Login With Email</h1>
          <form>
            <div className="flex flex-col gap-4 mt-4">
              <input
                type="email"
                placeholder="Email"
                id="user-email"
                name="user-email"
                className=" px-3 border p-2 rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                id="user-password"
                name="user-password"
                className="border p-2 rounded-lg"
              />
              <button className="bg-blue-600 text-white p-2 rounded-lg">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
