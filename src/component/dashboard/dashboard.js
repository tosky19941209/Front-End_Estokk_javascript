import React from "react";
import Filter from "./filter";
import OfferDashboard from "./offer_dashboard";
import OfferButtonGroup from "./offerbuttongroup";
function Dashboard() {
    return (
        <div className="h-[70vh] flex flex-col">
            <OfferButtonGroup/>
            <Filter />
            <OfferDashboard />
        </div>
    )
}

export default Dashboard