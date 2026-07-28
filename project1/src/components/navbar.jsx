function Navbar(){
    return(
        <div className="w-full h-23 flex justify-between items-center p-6 bg-[#ffffff]">
            <h2 className="font-bold text-2xl text-blue-600">My Brand</h2>
            <ul className="hidden md:flex md:flex-row md:gap-5 md:text-lg text-gray-800">
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Services</li>
            </ul>
            <button className=" w-25 h-8 bg-blue-600 text-white rounded-md">Get Started</button>

        </div>
    )
}
export default Navbar