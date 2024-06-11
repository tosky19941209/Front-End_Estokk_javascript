import React, { useEffect, useRef, useState } from "react";
import { forwardRef } from "react";
function imgSrc(imgName) {
    return imgName.toLowerCase().replace(/ /g, '')
}

const OfferBtn = forwardRef(function OfferBtn({ btnName, onClick, isBtnPush }, ref) {

    const currentRef = useRef(null)
    const [isHover, setIsHover] = useState(false);
    const buttonClass = "w-[100%] md:w-48 h-10 flex items-center justify-center border-[1px] border-[#00b3ba] text-[#00b3ba] hover:text-[white] hover:bg-[#00b3ba] rounded mt-2 mb-2 lg:mr-1 lg:ml-1 focus:outline-none duration-150"
    const pushClass = "w-[100%] md:w-48 h-10 flex items-center justify-center border-[1px] border-[#00b3ba] text-[white] bg-[#00b3ba] rounded mt-2 mb-2 lg:mr-1 lg:ml-1 focus:outline-none duration-150"

    return (
        <button
            ref={ref}
            className={isBtnPush == false ? buttonClass : pushClass}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            onClick={onClick}
        >
            {btnName}
            <img
                src={isHover || isBtnPush ? `./${imgSrc(btnName)}_hover.svg` : `./${imgSrc(btnName)}.svg`}
                className="w-8 ml-4"
            />
        </button>
    )
})

export default OfferBtn