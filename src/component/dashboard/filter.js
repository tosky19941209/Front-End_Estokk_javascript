import React from "react";

function Filter() {
    return (
        <div className="justify-begin w-[80vw] mt-10" id="Search">
            <p className="text-[50px] text-[white] font-bold ">Filters</p>
            <input
                type="text"
                className="form-control w-[100%] h-[5vh] mt-2 bg-[white] bg-opacity-40 placeholder:text-[white] focus:bg-[white] focus:bg-opacity-40 focus:border-none  text-[25px]"
                placeholder="Search for articles"
            />
            <div className="flex items-center mt-3 ">
                <input type="checkbox" className="mr-2 w-5 h-5" />
                <label className="text-[white] mt-2">Show only Whitelisted properties's offers</label>
            </div>
        </div>
    );
}

export default Filter;
