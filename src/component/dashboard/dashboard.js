import React from "react";
import Filter from "./filter";
import OfferDashboard from "./offer_dashboard";
import OfferButtonGroup from "./offerbuttongroup";
function Dashboard() {
    return (
        <div className=" flex flex-col items-center lg:items-start">
            <OfferButtonGroup/>
            <Filter />
            <OfferDashboard />
        </div>
    )
}

export default Dashboard