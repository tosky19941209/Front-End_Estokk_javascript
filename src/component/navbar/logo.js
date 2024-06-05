import React from "react";

function Logo() {
    return (
            <div className="flex ml-[100px]" id="Logo">
                <img src="logo.png" alt="logo" className="w-[100px] h-[100px] "></img>
                <div className="flex-col ml-5 mt-1">
                    <div className="flex">
                        <p className="text-[#00f6ff] text-[30px]">e</p>
                        <p className="text-[#ffffff] text-[30px]">S</p>
                        <p className="text-[#ffffff] text-[30px]">T</p>
                        <p className="text-[#ffffff] text-[30px]">O</p>
                        <p className="text-[#ffffff] text-[30px]">K</p>
                        <p className="text-[#ffffff] text-[30px]">K</p>
                        <p className="text-[#00f6ff] text-[20px] mt-3">Y</p>
                        <p className="text-[#00f6ff] text-[20px] mt-3">A</p>
                        <p className="text-[#00f6ff] text-[20px] mt-3">M</p>
                    </div>
                    <div className="w-[100%] h-[1%] bg-red-100 mt-[-5px]"></div>

                    <div className="flex justify-center align=center">
                        <p className="text-[10px] text-[#00f6ff]">Real ESTATE</p>
                    </div>
                    <div className="flex justify-center align=center">
                        <p className="text-[20px] text-[#ffffff]">VENTURES</p>
                    </div>
                </div>
            </div>
    )
}

export default Logo