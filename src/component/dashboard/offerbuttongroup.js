import React, { useState } from "react";
import OfferBtn from "../atmComponent/offerbtn";
function OfferButtonGroup() {

    const [isMyOfferBtnHover, setIsHover] = useState(false);

    return (
        <div className="flex">
            <OfferBtn btnName="My Offers"/>
            <OfferBtn btnName="Private Offers"/>
            <OfferBtn btnName="Add Offers"/>
        </div>
    )
}

export default OfferButtonGroup