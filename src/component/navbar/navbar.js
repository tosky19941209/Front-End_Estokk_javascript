

import React from "react"
import Logo from "./logo"
function NavBar() {
    return (
        <div className="w-[100%] h-[100px] flex justify-between">
            <div className="mt-3">
                <Logo />
            </div>

            <div className="flex" id="NavBar">
                <nav className="flex mt-10">
                    <ul className="flex w-[30vw]  items-center justify-between">
                        <li className="">

                            <a href="/" className="text-white text-[20px]">EXPLORE</a>
                        </li>
                        <li className="">
                            <a href="/" className="text-white text-[20px]">YOUR OFFERS</a>
                        </li>
                        <li className="" >
                            <a href="/" className="text-white text-[20px]">HISTORY</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="mt-8" id="ConnectWallet">
                <button className="w-[18vw] h-[6vh] rounded bg-[#00f6ff] mr-[100px] text-[25px] text-[white]">Connect Wallet</button>
            </div>

        </div>
    )
}

export default NavBar