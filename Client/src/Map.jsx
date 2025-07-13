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

export default function Map() {
  const [ports, setPorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/")
      .then(response => {
        // Override API data with fixed route and risk levels
        const fixedPorts = [
          { name: 'Mumbai', location: [19.076, 72.8777], risk: 'safe' },
          { name: 'Salalah (Oman)', location: [17.0194, 54.0891], risk: 'high' },
          { name: 'Jeddah (Saudi Arabia)', location: [21.4858, 39.1925], risk: 'safe' },
          { name: 'Port Said (Egypt)', location: [31.2653, 32.3019], risk: 'high' },
          { name: 'Algeciras (Spain)', location: [36.1408, -5.4567], risk: 'safe' },
          { name: 'New York', location: [40.7128, -74.0060], risk: 'safe' }
        ];
        setPorts(fixedPorts);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch ports');
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

  return (
    <MapContainer center={[10, 20]} zoom={3} style={{height: '88vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {ports.length > 1 && (
        <Polyline
          positions={ports.map(p => p.location)}
          color="blue"
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