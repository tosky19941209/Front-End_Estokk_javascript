import React from "react";

function Logo() {
    return (
            <div className="flex" id="Logo">
                <img src="logo.png" alt="logo" className="w-24 h-24 "></img>
                
                <div className="flex-col ml-2 mt-3 items-center justify-center">
                    <div className="flex items-center justify-center">
                        <p className="text-[#00f6ff] text-2xl">Dex</p>
                        <p className="text-[#ffffff] text-3xl">STOKK</p>
                    </div>
                    <div className="w-[100%] h-[1%] bg-red-100"></div>

                    <div className="flex justify-center align=center">
                        <p className="text-xs text-[#00f6ff]">DECENTRALIZED STOKK EXCHANGE</p>
                    </div>
                </div>
            </div>
    )
}

export default Logo