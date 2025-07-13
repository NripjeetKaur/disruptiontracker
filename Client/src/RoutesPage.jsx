import './DisruptionTracker.css'
import NewsFeed from './NewsFeed';
import ReRouteRiskPanel from './ReRouteRiskPanel';
import MapReRouted from './MapReRouted';
import Navbar from './Navbar';
import './Map.css'

export default function RoutesPage () {
    return (
        <div>
            <Navbar />
            <NewsFeed />
            <ReRouteRiskPanel />
            <MapReRouted />
        </div> 
        
    );
}