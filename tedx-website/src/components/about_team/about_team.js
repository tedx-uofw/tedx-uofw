import React from "react";
import Team from "../team/team";
import coPresData from "../../data/copres_data"
import designData from "../../data/design_data"
import webDevData from "../../data/web_dev_data"
import marketingData from "../../data/marketing_data"
import productionData from "../../data/production_data"
import financeData from "../../data/finance_data"
import speakerSelectionData from "../../data/speaker_selection_data"
import logisticsData from "../../data/logistics_data"

function AboutTeam() {    
    return (
        <div class="about-team-container page-container">
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

export default AboutTeam;