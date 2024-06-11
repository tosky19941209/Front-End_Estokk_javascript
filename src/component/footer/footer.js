import React from "react";
import Logo from "../navbar/logo";
function Footer() {
    return (
        <div className="w-[100%] flex justify-between object-cover"
            style={{
                "background": "url('./footer.png')",
            }}>

            <div className="pl-[9%]">
                <Logo />
            </div>

            <div className="mt-8 pr-[9%]" id="ConnectWallet">
                <button className="w-[300px] h-[50px] rounded bg-[#ffffff] text-[30px] text-[#00f6ff]">HELP</button>
            </div>

        </div>
    )
}

export default Footer