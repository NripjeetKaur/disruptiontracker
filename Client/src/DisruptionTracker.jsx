import './DisruptionTracker.css'
import NewsFeed from './NewsFeed';
import RiskPanel from './RiskPanel';
import Map from './Map';
import Navbar from './Navbar';
import './Map.css'

export default function DisruptionTracker () {
    return (
        <div>
            <Navbar />
            <NewsFeed />
            <RiskPanel />
            <Map />
        </div> 
        
    );
}