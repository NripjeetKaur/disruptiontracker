import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Circle
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

export default function MapReRouted() {
  const [ports, setPorts] = useState([]);
  const [disruption, setDisruption] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/api/ReRoutesPage")
      .then(response => {
        const { disruption, ports } = response.data;
        setDisruption(disruption);
        setPorts(ports);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch rerouted ports');
        setLoading(false);
      });
  }, []);

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'high':
        return { color: 'red', fillColor: 'red' };
      case 'medium':
        return { color: 'orange', fillColor: 'orange' };
      case 'safe':
      default:
        return { color: 'green', fillColor: 'green' };
    }
  };

  if (loading) return <div>Loading map data...</div>;
  if (error) return <div>{error}</div>;

  if (!disruption) {
    return <div style={{ padding: '1rem', fontSize: '1.2rem' }}>
      No disruption detected — current primary route is good.
    </div>;
  }

  return (
    <MapContainer center={[10, 20]} zoom={3} style={{ height: '88vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {ports.length > 1 && (
        <Polyline
          positions={ports.map(p => p.location)}
          color="blue"
          weight={4}
        />
      )}

      {ports.map((port, index) => {
        const riskStyle = getRiskColor(port.risk);
        return (
          <React.Fragment key={index}>
            <Marker position={port.location}>
              <Popup>{port.name}<br />Risk Level: {port.risk}</Popup>
            </Marker>

            <Circle
              center={port.location}
              radius={200000}
              pathOptions={{
                ...riskStyle,
                fillOpacity: 0.3
              }}
            />
          </React.Fragment>
        );
      })}
    </MapContainer>
  );
}