
const Navbar = () => {
  return (
    <nav className=" w-full h-1/5 flex justify-around bg-black p-4 items-center">
        <div>
            <img src="/src/assets/Passman.svg" alt="" className="w-1/3 h-1/4"/>
        </div>
        <div  >
            <button className="bg-green-500 rounded-full px-4 py-2 flex items-center gap-2 h-4/3 font-bold text-sm md:text-lg md:px-4">
                <img src="/src/assets/github-mark-white.svg" alt="" className="md:w-5 md:h-5 w-3 h-3" />
                Github
            </button>
        </div>
    </nav>
  ) 
}

export default Navbar