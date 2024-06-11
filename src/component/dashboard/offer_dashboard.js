import React, { useEffect, useState } from "react";
import Modal from "react-modal"
import MarketBtn from "../atmComponent/marketbtn";
import CreateBtn from "../atmComponent/createBtn";
import AddOfferModal from "./addoffermodal";
import CreateOfferModal from "./createoffermodal";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function OfferDashboard(props) {

    const [isHover, setIsHover] = useState(false)
    const buttonClass = "w-[100%] h-10 flex items-center border-[1px] border-[#00b3ba] text-[#00b3ba] hover:text-[white] hover:bg-[#00b3ba] rounded mt-2 mb-2 lg:mr-1 lg:ml-1 focus:outline-none duration-150"

    const [isAddOfferModalOpen, setIsAddOfferModalOpen] = useState(false)
    const [isCreateOfferModalOpen, setIsCreateOfferModalOpen] = useState(false)
    const [createoffer, setCreateOffer] = useState()
    const [createOfferTitle, setCreateOfferTitle] = useState()

    const [isBtnPush1, setIsBtnPush1] = useState(false)
    const [isBtnPush2, setIsBtnPush2] = useState(false)
    const [isBtnPush3, setIsBtnPush3] = useState(false)
    const currentRef = useRef(null)

    useEffect(() => {
        if (createoffer === "sell" ||
            createoffer === "buy" ||
            createoffer === "exchange"
        ) {
            setCreateOfferTitle(createoffer)
            setIsCreateOfferModalOpen(true)
        }
        else {
            setCreateOffer("none")
        }
    }, [createoffer])

    const navigate = useNavigate()

    useEffect(() => {
        currentRef.current.click()
    }, [])

    return (
        <div className="flex flex-col w-[100%]  justify-between">

            <div className="flex w-[100%] lg:w-[60%] justify-between md:flex-row flex-col">
                <MarketBtn
                    btnName="Sell"
                    ref={currentRef}
                    isBtnPush={isBtnPush1}
                    onClick={() => {
                        setIsBtnPush1(true)
                        setIsBtnPush2(false)
                        setIsBtnPush3(false)
                    }}
                />
                <MarketBtn btnName="Buy"
                    isBtnPush={isBtnPush2}
                    onClick={() => {
                        setIsBtnPush1(false)
                        setIsBtnPush2(true)
                        setIsBtnPush3(false)
                    }} />
                <MarketBtn btnName="Exchange"
                    isBtnPush={isBtnPush3}
                    onClick={() => {
                        setIsBtnPush1(false)
                        setIsBtnPush2(false)
                        setIsBtnPush3(true)
                    }} />
            </div>

            <div className=" mt-4 rounded-md h-[60vh]">
                <div className="white pl-2 pr-2 w-[100%] h-[90%] bg-[white]">
                    {
                        props.offerType == 1 &&
                        <>
                            <p className="text-center text-xl text-[#00b3ba]">Dex</p>
                            <p className="text-center text-xl text-[#00b3ba]">Dex</p>
                            <table class="w-[100%] table ">
                                <thead>
                                    <tr>
                                        <th className="text-sm">Offer ID</th>
                                        <th className="text-sm">Offer Token</th>
                                        <th className="text-sm" th>Buyer Token</th>
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
                                    <tr className="cursor-pointer"
                                        onClick={() => {
                                            navigate("/showoffer")
                                        }}>
                                        <td>171</td>
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
                                </tbody>
                            </table>
                        </>
                    }
                    {
                        props.offerType == 2 &&
                        <>
                            <p className="text-center text-xl text-[#00b3ba]">Dex</p>
                            <p className="text-center text-xl text-[#00b3ba]">Dex</p>
                            <table class="w-[100%] table ">
                                <thead>
                                    <tr>
                                        <th className="text-sm">Offer ID</th>
                                        <th className="text-sm">Offer Token</th>
                                        <th className="text-sm" th>Buyer Token</th>
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
                                    <tr className="cursor-pointer"
                                        onClick={() => {
                                            navigate("/showoffer")
                                        }}>
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
                                </tbody>
                            </table>
                        </>
                    }
                    {
                        props.offerType == 3 &&
                        <div>
                            <p className="text-center text-xl text-[#00b3ba] font-bold pt-2">Create Offer</p>
                            <button
                                className={buttonClass}
                                onMouseOver={() => setIsHover(true)}
                                onMouseOut={() => setIsHover(false)}
                                onClick={() => { setIsAddOfferModalOpen(true) }}
                            >
                                <img src={isHover ? `./addoffers_hover.svg` : `./addoffers.svg`} className="w-5  ml-2 mr-2" />
                                Add Offer
                            </button>
                        </div>
                    }

                </div>

                <AddOfferModal
                    isAddOfferModalOpen={isAddOfferModalOpen}
                    setIsAddOfferModalOpen={setIsAddOfferModalOpen}
                    setCreateOffer={setCreateOffer}
                />

                <CreateOfferModal
                    isCreateOfferModalOpen={isCreateOfferModalOpen}
                    setIsCreateOfferModalOpen={setIsCreateOfferModalOpen}
                    createOfferTitle={createOfferTitle}
                    setCreateOffer={setCreateOffer}
                />

            </div>
        </div>
    )
}

export default OfferDashboard