import React from "react";

function ShowOffer() {
    return (
        <div className="flex flex-col items-center justify-center w-[100%] bg-[white]">
            <p className="flex w-[80vw] bg-[#00dbe3] text-[white] text-[30px] items-center justify-center mt-20">
                SELL
            </p>
            <img src='./offerbackground.png' alt="offerbackground" className="w-[80vw]" />
            <p className="flex w-[80vw] bg-[#173039] text-[white] text-[30px] items-center justify-center">
                20550 Townsen Blvd Bldg 2 unit 101
                <p className="text-[30px] text-[#00dbe3] ml-3">Humble Tx 77338</p>
            </p>
            <div className="w-[60vw]">
                <div className="flex flex-col items-center justify-center w-40 bg-[#173039] rounded mt-4">
                    <p className="text-[#00dbe3] text-[20px]">
                        Offer Number
                    </p>
                    <p className="text-[white] text-[15px]">1948</p>
                </div>
                <div className="pl-3">
                    <p className="text-[#00dbe3] text-[20px] mt-3">Offer Token Name</p>
                    <p>Detail Token Name</p>

                    <p className="text-[#00dbe3] text-[20px] mt-3">Buyer Token Name</p>
                    <p>USDC</p>

                    <p className="text-[#00dbe3] text-[20px] mt-3">Seller Address</p>
                    <p>Seller Wallet address</p>

                    <p className="text-[#00dbe3] text-[20px] mt-3">Quantity</p>
                    <p>149.938287</p>

                    <p className="text-[#00dbe3] text-[20px] mt-3">Price</p>
                    <p>1 Property Token Name </p>
                </div>
                <button className="flex items-center justify-center w-[100%] bg-[#23a2bb] mt-5 mb-5 ">
                    <p className="text-[25px] text-[white] font-bold">Cart</p>
                    <img src="./cart.svg" alt="cart.svg" className="w-10"/>
                </button>
            </div>
        </div>
    )
}

export default ShowOffer;