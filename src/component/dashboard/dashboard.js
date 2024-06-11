import React, { useEffect, useState } from "react";
import Filter from "./filter";
import OfferDashboard from "./offer_dashboard";
import OfferButtonGroup from "./offerbuttongroup";
function Dashboard() {

    const [offerType, setOfferType] = useState(1)

    return (
        <div className=" flex flex-col items-center lg:items-start">
            <OfferButtonGroup setOfferType={setOfferType} />
            <Filter />
            <OfferDashboard offerType={offerType}/>
        </div>
    )
}

export default Dashboard