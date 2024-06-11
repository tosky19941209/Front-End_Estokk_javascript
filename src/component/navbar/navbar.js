import React from "react"
import Logo from "./logo"
function NavBar() {
    return (
        <div className="w-[80%] flex flex-col items-center lg:flex-row lg:justify-between ">
            <div className="absolute right-10 top-3 block lg:hidden" id="ConnectWallet">
                <button className="w-[40vw] h-[6vh] rounded bg-[#00f6ff] text-lg text-[white]">Connect Wallet</button>
            </div>

            <div className="mt-20 lg:mt-3 flex ">
                <Logo />
            </div>

            <div className="flex" id="NavBar">
                <nav className="flex mt-10">
                    <ul className="flex w-[80vw] lg:w-[30vw]  items-center justify-between">
                       
                        <li className="">
                            <p className="text-white text-[20px]">EXPLORE</p>
                        </li>
                       
                        <li className="">
                            <p className="text-white text-[20px]">YOUR OFFERS</p>
                        </li>
                     
                        <li className="" >
                            <p className="text-white text-[20px]">HISTORY</p>
                        </li>
                   
                    </ul>
                </nav>
            </div>

            <div className="mt-8 hidden lg:block" id="ConnectWallet">
                <button className="w-[18vw] h-[6vh] rounded bg-[#00f6ff] text-[2xl] text-[white]">Connect Wallet</button>
            </div>

        </div>
    )
}

export default NavBar