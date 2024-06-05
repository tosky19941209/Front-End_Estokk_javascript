import React, {useState} from "react";

function MarketBtn ({btnName}) {
    const [isHover, setIsHover] = useState(false)
    const buttonClass = "w-48 h-10 flex items-center justify-center border-[1px] border-[#00b3ba] text-[#00b3ba] hover:text-[white] hover:bg-[#00b3ba] rounded mr-2 focus:outline-none"
    return (
        <button className={buttonClass} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
            {btnName}
        </button>
    )
}

export default MarketBtn