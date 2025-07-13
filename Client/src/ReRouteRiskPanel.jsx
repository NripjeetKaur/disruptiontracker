import './RiskPanel.css';
import Heading from './Heading';
import InfoTag from './InfoTag';


export default function ReRouteRiskPanel () {
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
                 
                 title="Mombasa"
                 description="Risk Level: Safe"
                 highlight="Safe"
                 riskLevel="Safe"
            />
            <InfoTag
                title="Durban"
                description="Risk Level: Safe"
                highlight="Safe"
                riskLevel="Safe"
            />
            <InfoTag
                title="Cape Town"
                description="Risk Level: Safe"
                highlight="Safe"
                riskLevel="Safe"
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