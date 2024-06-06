import React, { useState } from "react";
import OfferBtn from "../atmComponent/offerbtn";
function OfferButtonGroup() {


    return (
        <div className="flex flex-col md:flex-row w-[100%] lg:w-[60%] justify-between ">
            <OfferBtn btnName="My Offers"/>
            <OfferBtn btnName="Private Offers"/>
            <OfferBtn btnName="Add Offers" onClick={() => {
            }}/>
            <button className="text-[white]">Model</button>
        </div>
    )
}

export default OfferButtonGroup