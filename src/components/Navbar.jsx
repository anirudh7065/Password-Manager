
const Navbar = () => {
  return (
    <nav className="w-full h-1/5 flex justify-around bg-black p-4 items-center">
        <div>
            <img src="/src/assets/Passman.svg" alt="" className="w-1/3 h-1/4"/>
        </div>
        <div >
            <button className="bg-green-500 rounded-full px-2 py-1 flex items-center gap-2 h-4/3 font-bold">
                <img src="/src/assets/github-mark-white.svg" alt="" className="w-5 h-5" />
                Github
            </button>
        </div>
    </nav>
  ) 
}

export default Navbar