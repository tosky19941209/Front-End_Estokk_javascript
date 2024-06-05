'use client'
import Link from "next/link"
import React from "react"
import Logo from "./logo"
function NavBar() {
    return (
        <div className="w-[100%] h-[100px] flex justify-between" >
            <img src='./dashboard.png' className="absolute w-[100vw] h-[40vh] z-[-1]"></img>

            <Logo/>

            <div className="flex" id="NavBar">
                <nav className="flex mt-10">
                    <ul className="flex">
                        <li className="mr-10 ml-10">
                            <Link href="">EXPLORE</Link>
                        </li>
                        <li className="mr-10 ml-10">
                            <Link href="">OFFERS</Link>
                        </li>
                        <li className="mr-10 ml-10">
                            <Link href="">HISTORY</Link>
                        </li>
                        <li className="mr-10 ml-10">
                            <Link href="">LANGUAGE</Link>
                        </li>

                    </ul>
                </nav>
            </div>

            <div className="mt-8" id="ConnectWallet">
                <button className="w-[300px] h-[50px] rounded bg-[#00f6ff] mr-[100px] text-[30px]">Connect Wallet</button>
            </div>

        </div>
    )
}

export default NavBar