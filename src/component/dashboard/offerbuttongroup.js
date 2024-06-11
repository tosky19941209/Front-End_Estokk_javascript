import React, { useDeferredValue, useEffect, useState } from "react";
import OfferBtn from "../atmComponent/offerbtn";
import { useRef } from "react";
function OfferButtonGroup(props) {
    const [isBtnPush1, setIsBtnPush1] = useState(false)
    const [isBtnPush2, setIsBtnPush2] = useState(false)
    const [isBtnPush3, setIsBtnPush3] = useState(false)

    const currentRef = useRef(null)

    useEffect(() => {
        currentRef.current.click()
    }, [])
    return (
        <div className="flex flex-col md:flex-row w-[100%] lg:w-[60%] justify-between ">
            <OfferBtn btnName="My Offers"
                ref={currentRef}
                onClick={(e) => {
                    props.setOfferType(1)
                    setIsBtnPush1(true)
                    setIsBtnPush2(false)
                    setIsBtnPush3(false)
                }}
                isBtnPush={isBtnPush1}
            />
            <OfferBtn btnName="Private Offers"
                onClick={(e) => {
                    props.setOfferType(2)
                    setIsBtnPush2(true)
                    setIsBtnPush1(false)
                    setIsBtnPush3(false)
                }}
                isBtnPush={isBtnPush2}
            />
            <OfferBtn btnName="Add Offers"
                onClick={(e) => {
                    props.setOfferType(3)
                    setIsBtnPush3(true)
                    setIsBtnPush1(false)
                    setIsBtnPush2(false)
                }}
                isBtnPush={isBtnPush3}
            />
        </div>
    )
}

export default OfferButtonGroup