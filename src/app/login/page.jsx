const LoginPage = () => {
  return (
    <div className="  flex items-center justify-center mx-auto  flex-col p-5 w-full h-screen">
      <form className="flex flex-col gap-7 bg-bg-color-soft p-12  justify-center rounded-md size-[400px] ">
        <h2 className="font-medium mb-4 text-center text-3xl">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="  bg-bg-color p-4 rounded-md border border-[#2e374a] "
        />
        <input
          type="password"
          placeholder="Password"
          className="  bg-bg-color p-4 rounded-md border  border-[#2e374a] "
        />
        <button
          type="submit"
          className="bg-teal-600 p-4 rounded-md w-full  font-medium text-xl border-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
