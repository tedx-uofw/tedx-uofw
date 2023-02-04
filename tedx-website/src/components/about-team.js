import React from "react";
import Team from "./team";
import coPresData from "../data/coPresData"
import designData from "../data/designData"
import webDevData from "../data/webDevData"
import marketingData from "../data/marketingData"
import productionData from "../data/productionData"
import financeData from "../data/financeData"
import speakerSelectionData from "../data/speakerSelectionData"
import logisticsData from "../data/logisticsData"




function aboutTeam (props){    
    return (
        <div>
            <Team
                name="Co Presidents"
                data={coPresData}
                >
            </Team>
            <Team
                name="Design Team"
                data={designData}
                >
            </Team>
            <Team
                name="Web Development Team"
                data={webDevData}
            >
            </Team>
            <Team
                name="Marketing Team"
                data={marketingData}>
            </Team>
            <Team
                name="Production Team"
                data={productionData}>
            </Team>
            <Team
                name="Logistics Team"
                data={logisticsData}>
            </Team>
             <Team
                name="Finance Team"
                data={financeData}>
            </Team>
            <Team
                name="Speaker Selection Team"
                data={speakerSelectionData}>
            </Team> 
            
        </div>
    );
    
}

export default aboutTeam;