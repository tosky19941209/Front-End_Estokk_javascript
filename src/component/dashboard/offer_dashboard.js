import React from "react";
import MarketBtn from "../atmComponent/marketbtn";
function OfferDashboard() {
    return (
        <div className="flex flex-col w-[100%]  justify-between">

            <div className="flex w-[100%] lg:w-[60%] justify-between md:flex-row flex-col">
                <MarketBtn btnName="Sell" />
                <MarketBtn btnName="Buy" />
                <MarketBtn btnName="Exchange" />
            </div>

            <div className=" mt-4 rounded-md h-[60vh]">
                <div className="white pl-2 pr-2 w-[100%] h-[95%] bg-[white]">
                    {/* <p className="text-center text-xl text-[#00b3ba]">Dex</p>
                <table class="w-[100%] table ">
                    <thead>
                        <tr>
                            <th className="text-sm">Offer ID</th>
                            <th className="text-sm">Offer Token</th>
                            <th className="text-sm"th>Buyer Token</th>
                            <th className="text-sm">Rate of Return</th>
                            <th className="text-sm">Official Yield</th>
                            <th className="text-sm">Yield Delta</th>
                            <th className="text-sm">Official Price</th>
                            <th className="text-sm">Price / Token</th>
                            <th className="text-sm">Price delta</th>
                            <th className="text-sm">Available quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>371</td>
                            <td>Token1</td>
                            <td>USDC</td>
                            <td>10%</td>
                            <td>12%</td>
                            <td>20%</td>
                            <td>$51.35</td>
                            <td>$60</td>
                            <td>16.85%</td>
                            <td>12.8893</td>
                        </tr>
                        
                        <tr>
                            <td>341</td>
                            <td>Token3</td>
                            <td>USDC</td>
                            <td>9%</td>
                            <td>42%</td>
                            <td>30%</td>
                            <td>$51.35</td>
                            <td>$60</td>
                            <td>16.85%</td>
                            <td>12.8893</td>
                        </tr>
                        
                        <tr>
                            <td>583</td>
                            <td>Token2</td>
                            <td>USDC</td>
                            <td>15%</td>
                            <td>12%</td>
                            <td>209%</td>
                            <td>$51.35</td>
                            <td>$60</td>
                            <td>16.85%</td>
                            <td>12.8893</td>
                        </tr>
                        
                    </tbody>
                </table> */}

                </div>
            </div>
        </div>
    )
}

export default OfferDashboard