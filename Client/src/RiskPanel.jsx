import './RiskPanel.css';
import Heading from './Heading';
import InfoTag from './InfoTag';


export default function RiskPanel () {
    return (
        <div className="RiskPanel">
            <Heading heading="Risk Analysis Panel" />
            <InfoTag
                title="Mumbai"
                description="Risk Level: Safe"
                highlight="Safe"
                riskLevel="Safe"
            />
            <InfoTag
                 
                 title="Salalah"
                 description="Regional Conflict"
                 highlight="High Risk"
                 riskLevel="High Risk"
            />
            <InfoTag
                title="Jeddah"
                description="Risk Level: Safe"
                highlight="Safe"
                riskLevel="Safe"
            />
            <InfoTag
                title="Port Said"
                description="Geopolitical Unrest"
                highlight="High Risk"
                riskLevel="High Risk"
            />
            <InfoTag
                title="Algecirus"
                description="Risk Level: Safe"
                highlight="Safe"
                riskLevel="Safe"

            />
            <InfoTag
                title="New York"
                description="Risk Level: Safe"
                highlight="Safe"
                riskLevel="Safe"
            />
            
        </div>
    );
}
