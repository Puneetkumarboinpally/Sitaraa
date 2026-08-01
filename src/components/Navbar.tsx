const Navbar = () => {
  return (
    <div>
      <div className="bg-red-500 flex justify-between items-center px-4 h-16">
        <h1 className="font-bold text-2xl text-white">Chitram</h1>
        <div className="flex gap-1 items-center">
          <input
            className="width-full max-w- border-2 py-1 px-2 outline-none rounded"
            type="text"
            placeholder="search your movie here.."
          />
          <span className="border p-1">🔍</span>
        </div>
        <div className="flex gap-2">
          <button>login/signup</button>
          <div>☀️</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
