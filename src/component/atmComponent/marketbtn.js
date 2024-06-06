import React, {useState} from "react";

function MarketBtn ({btnName, onClick}) {
    const [isHover, setIsHover] = useState(false)
    const buttonClass = "w-[100%] md:w-48 h-10 flex items-center justify-center border-[1px] border-[#00b3ba] text-[#00b3ba] hover:text-[white] hover:bg-[#00b3ba] rounded mt-2 lg:mr-1 lg:ml-1 focus:outline-none duration-150"
    return (
        <button className={buttonClass} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} onClick={onClick}>
            {btnName}
        </button>
    )
}

export default MarketBtn