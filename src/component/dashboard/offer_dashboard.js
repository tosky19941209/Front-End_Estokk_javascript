import React from "react";
import MarketBtn from "../atmComponent/marketbtn";
function OfferDashboard() {
    return (
        <div className="flex flex-col justify-between mt-3">

            <div className="flex">
                <MarketBtn btnName="Sell" />
                <MarketBtn btnName="Buy" />
                <MarketBtn btnName="Exchange" />
            </div>

            <div className=" mt-4 bg-[white] rounded-md">
                <p className="text-center text-xl text-[#00b3ba]">Dex</p>
                <table class="table">
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
                </table>
            </div>
        </div>
    )
}

export default OfferDashboard