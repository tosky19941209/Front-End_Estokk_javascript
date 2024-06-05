import React from "react";
import Logo from "../navbar/logo";
import { url } from "inspector";
function Footer() {
    return (
        <div className="w-full flex justify-between object-cover">
            <img src='./foot.png' className="absolute w-[100vw] h-[11vh] z-[-1]">

            </img>
            <Logo />

            <div className="mt-8" id="ConnectWallet">
                <button className="w-[300px] h-[50px] rounded bg-[#ffffff] mr-[100px] text-[30px] text-[#00f6ff]">HELP</button>
            </div>

        </div>
    )
}

export default Footer