import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import CreateBtn from "../atmComponent/createBtn";
import { useNavigate } from "react-router-dom";
function CreateOfferModal(props) {
    const close = () => {
        props.setCreateOffer("none")
        props.setIsCreateOfferModalOpen(false)
    }

    return (
        <Modal
            ariaHideApp={false}
            isOpen={props.isCreateOfferModalOpen}
            onRequestClose={
                () => {
                    // props.setCreateOffer("none")
                    // props.setIsCreateOfferModalOpen(false)
                    close()
                }
            }
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                },
            }}
        >
            <div className="w-[90vw] lg:w-[500px] lg:h-[750px] flex flex-col">
                <div className="flex w-[100%] justify-between items-center">
                    <p className="flex items-center justify-center rounded-md bg-[red] w-32 h-8 text-[25px] text-[white]">
                        {props.createOfferTitle}
                    </p>
                    <p className="text-[25px] text-[#00b3ba]">
                        Create your Offer
                    </p>
                    <div className="flex items-center justify-center rounded-md bg-[#173039] w-32 h-8 text-[20px] text-[white]">
                        <img src='mark.png' className="w-8" alt="mark" />
                        <p>
                            5%
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-[100%] mt-4">
                    <p>Offer Token</p>
                    <select type="list" className="h-9 border-[2px] mt-1 border-[#00b3ba] rounded-md focus:outline-none">
                        <option value="19530_hickory">19530 Hickory</option>
                        <option value="19530_hickory">RealToken 4380</option>
                    </select>
                </div>

                <div className="flex flex-col w-[100%] mt-3">
                    <p>Buyer Token</p>
                    <select type="list" className="h-9 border-[2px] mt-1 border-[#00b3ba] rounded-md focus:outline-none">
                        <option>USDC</option>
                        <option>xWDAI</option>
                        <option>armmwXDAI</option>
                        <option>MAI</option>
                        <option>wETH</option>
                    </select>
                </div>

                <div className="flex flex-row w-[100%] mt-3 justify-between">
                    <div>
                        <p>Buyer price in $</p>
                        <input type="list" className="h-9 w-[100%] border-[2px] mt-1 border-[#00b3ba] rounded-md focus:outline-none"></input>
                    </div>
                    <img src="./exchange.svg" className="w-10 mt-[40px]"></img>
                    <div>
                        <p>Buyer price in USDC</p>
                        <input type="list" className="h-9 w-[100%] border-[2px] mt-1 border-[#00b3ba] rounded-md focus:outline-none"></input>
                    </div>
                </div>
                <p className="w-[50%] text-[red] text-[10px]">
                    Price difference is 18.51% but limit by shiled fixed
                    Price difference is 18.51% but limit by shiled fixed
                    Price difference is 18.51% but limit by shiled fixed
                    Price difference is 18.51% but limit by shiled fixed
                </p>

                <p className="w-[50%] text-[black] text-[15px] mt-3">
                    Price difference is 18.51% but limit by shiled fixed
                    Price difference is 18.51% but limit by shiled fixed
                </p>
                <div className="bg-[#00b3ba] w-[100%] h-[2px] "></div>
                <p className="text-[15px] text-[#00b3ba] mt-3">Wallet balance</p>
                <div className="flex items-center justify-start mt-1">
                    <img src='./billing.png' alt='billing' className="w-12" />
                    <div className="ml-2">
                        <p className="font-bold text-[13px]">
                            19530 Hickory
                        </p>
                        <p className="text-[13px]">
                            With USDC = 1.00000054$
                        </p>
                    </div>
                </div>
                <p className="text-[15px] text-[black] mt-3">Quantity</p>
                <input type="list" className="h-9 w-[100%] border-[2px] mt-1 border-[#00b3ba] rounded-md focus:outline-none"></input>
                <div className="flex items-center mt-3 ">
                    <input type="checkbox" className="mr-2 w-5 h-5" />
                    <label className="text-[black] mt-2">I want to create private offer</label>
                </div>
                <p className="text-[#00b3ba] font-bold">
                    You wish to sell up to 12  "19530 Hickly" with unit price
                </p>

                <button
                    className="w-60 h-10 mt-3 border-[2px] border-[#00b3ba] text-[#00b3ba] hover:text-[white] hover:bg-[#00b3ba] duration-300 focus:outline-none rounded "
                    onClick={() => {
                        close()
                    }}
                >
                    Add new Offer
                </button>
            </div>
        </Modal>
    )
}

export default CreateOfferModal