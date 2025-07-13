import express from 'express';

const app = express();


app.get('/api/NewsFeedMore/:id', (req, res) => {
  const news = [
    {
      id: 1,
      titleofnews: 'Geopolitical unrest and Suez Canal vulnerability',
      content: 'The Suez Canal near Port Said has become a strategic chokepoint under growing strain due to escalating geopolitical tensions in the surrounding region. These disruptions are fueled by military conflicts, instability in neighboring countries, piracy threats, and international sanctions. As a result, vessels transiting through the canal face significant delays, increased security checks, rerouting pressure, and higher insurance costs. The cumulative impact can lead to supply chain bottlenecks, disrupted delivery timelines, and higher freight costs for routes relying on this key transit hub.'
    },
    {
      id: 2,
      titleofnews: 'Proximity to conflict zones and rerouting risks due to naval tension',
      content: 'Salalah, a critical transshipment hub along Gulf shipping lanes, is experiencing vulnerability due to its geographic proximity to high-risk areas in the Arabian Sea and Gulf of Aden. Ongoing naval operations, political tensions, and occasional shipping advisories have led major carriers to either delay or temporarily avoid docking at this port. This results in port congestion, disruption in cargo schedules, and unexpected rerouting of shipments. Long-term exposure to such risks could make Salalah less favorable for time-sensitive shipments and trade routes involving West Asia and East Africa.'
    }
  ];

  const item = news.find(n => n.id === parseInt(req.params.id));
  if (item) {
    res.send(item);
  } else {
    res.status(404).send({ error: 'News item not found' });
  }
});





app.get('/', (req,res) => {
    const ports = [
  {
    "name": "Mumbai Port, India",
    "location": [18.9582, 72.8321],
    "risk": "safe"
  },
  {
    "name": "Port of Muscat, Oman",
    "location": [23.5859, 58.4059],
    "risk": "high"
  },
  {
    "name": "Port of Naples, Italy",
    "location": [40.8518, 14.2681],
    "risk": "medium"
  },
  {
    "name": "Port of New York, USA",
    "location": [40.7128, -74.0060],
    "risk": "safe"
  }
  ];
  res.send(ports);
});


app.get('/api/ReRoutesPage', (req, res) => {
  // Primary route with ports marked as high risk
  const primaryRoute = [
    { name: 'Mumbai, India', location: [19.076, 72.8777], risk: 'safe' },
    { name: 'Salalah, Oman', location: [17.0194, 54.0894], risk: 'high' },   // disruption here
    { name: 'Jeddah, Saudi Arabia', location: [21.4858, 39.1925], risk: 'safe' },
    { name: 'Port Said, Egypt', location: [31.2653, 32.3019], risk: 'high' }, // disruption here
    { name: 'Algeciras, Spain', location: [36.1408, -5.4567], risk: 'safe' },
    { name: 'New York, USA', location: [40.7128, -74.006], risk: 'safe' }
  ];

  // Alternate route going around Africa via East African coast → Cape of Good Hope → Europe → US
  const alternateRoute = [
    { name: 'Mumbai, India', location: [19.076, 72.8777], risk: 'safe' },
    { name: 'Mombasa, Kenya', location: [-4.0435, 39.6682], risk: 'safe' },
    { name: 'Durban, South Africa', location: [-29.8587, 31.0218], risk: 'safe' },
    { name: 'Cape Town, South Africa', location: [-33.9249, 18.4241], risk: 'safe' },
    { name: 'Algeciras, Spain', location: [36.1408, -5.4567], risk: 'safe' },
    { name: 'New York, USA', location: [40.7128, -74.006], risk: 'safe' }
  ];

  // Check if primary route has disruption (any 'high' or 'medium' risk)
  const disruption = primaryRoute.some(port => port.risk === 'high' || port.risk === 'medium');

  if (disruption) {
    return res.json({ disruption: true, ports: alternateRoute });
  } else {
    return res.json({ disruption: false, ports: primaryRoute });
  }
});



const port = 3000;

app.listen(port, () => {
    console.log('server is ready');
}
);
