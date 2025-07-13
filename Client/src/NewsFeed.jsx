import './NewsFeed.css';
import InfoTag from './InfoTag';
import Heading from './Heading'


export default function NewsFeed () {
    return (
        <div className="NewsFeed">
            <Heading heading="Disruption News Feed"/>
            <InfoTag
             id={1}
             title="Geopolitical Unrest"
             description="Suez Canal vulnerability."
             highlight="Know more"
            />
            <InfoTag
            id={2}
            title="Regional Instability"
            description="Rerouting near conflict zones."
            highlight="Know more"
            />
            
        </div>
    );
}