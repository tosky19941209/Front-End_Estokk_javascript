import React from "react";

function Dashboard() {
    return (
        <>
            <div className="justify-begin w-[100%] mt-[-100px] pl-32 " id="Search">
                <p className="text-[30px] ml-[00px]">Filters</p>
                <input
                    type="text"
                    className="border-none rounded-md bg-[#01d4c1] w-[1500px] h-[40px] mt-5"
                />
                <div className="flex items-center mt-5">
                    <input type="checkbox" className="mr-2" />
                    <label>Show only Whitelisted properties' offers</label>
                </div>
            </div>

            <div className="flex justify-between  ">
                <div className="flex flex-col mr-10">
                    <button className="w-[200px] h-[50px] bg-[#00dbe3] rounded mt-1">SELL</button>
                    <button className="w-[200px] h-[50px] bg-[#23a2bb] rounded mt-1">BUY</button>
                    <button className="w-[200px] h-[50px] bg-[#173039] rounded mt-1">EXCHANGE</button>
                </div>

                <div className="w-[1000px] h-[200px] ml-10  ">
                    <ul className="flex">
                        <li className="mr-5 text-[12px]">
                            Off ID
                        </li>
                        <li className="mr-5 text-[12px]">
                            Off Token
                        </li>
                        <li className="mr-5 text-[12px]">
                            Buyer Token
                        </li>
                        <li className="mr-5 text-[12px]">
                            Rate of Return 
                        </li>
                        <li className="mr-5 text-[12px]">
                            offer Yeild
                        </li>
                        <li className="mr-5 text-[12px]">
                            % Difference 
                        </li>
                        <li className="mr-5 text-[12px]">
                            Official Price 
                        </li>
                        <li className="mr-5 text-[12px]">
                            Asked Price  
                        </li>
                        <li className="mr-5 text-[12px]">
                            Difference    
                        </li>
                        <li className="mr-5 text-[12px]">
                            Stocke    
                        </li>
                        <li className="mr-5 text-[12px]">
                            Cart    
                        </li>
                        <li className="mr-3 text-[12px]">
                            View    
                        </li>
                    </ul>


                    <ul className="flex mt-3">
                        <li className="mr-10 text-[12px]">
                            327
                        </li>
                        <li className="mr-10 text-[12px]">
                           Token1
                        </li>
                        <li className="mr-20 text-[12px]">
                            USDC
                        </li>
                        <li className="mr-16 text-[12px]">
                            10%
                        </li>
                        <li className="mr-16 text-[12px]">
                            12%
                        </li>
                        <li className="mr-16 text-[12px]">
                            20%
                        </li>
                        <li className="mr-12 text-[12px]">
                            $51.35
                        </li>
                        <li className="mr-14 text-[12px]">
                            $60 
                        </li>
                        <li className="mr-8 text-[12px]">
                           $16.85    
                        </li>
                        <li className="mr-10 text-[12px]">
                           12.88
                        </li>
                        <li className="mr-5 text-[12px]">
                            
                        </li>
                        <li className="mr-3 text-[12px]">
                            
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
