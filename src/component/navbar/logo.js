import React from "react";

function Logo() {
    return (
            <div className="flex ml-[100px]" id="Logo">
                <img src="logo.png" alt="logo" className="w-[100px] h-[100px] "></img>
                
                <div className="flex-col ml-5 mt-3 items-center justify-center">
                    <div className="flex items-center justify-center">
                        <p className="text-[#00f6ff] text-[30px]">Dex</p>
                        <p className="text-[#ffffff] text-[30px]">STOKK</p>
                    </div>
                    <div className="w-[100%] h-[1%] bg-red-100 mt-[-5px]"></div>

                    <div className="flex justify-center align=center">
                        <p className="text-[10px] text-[#00f6ff]">DECENTRALIZED STOKK EXCHANGE</p>
                    </div>
                </div>
            </div>
    )
}

export default Logo