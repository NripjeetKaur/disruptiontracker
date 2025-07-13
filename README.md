# 🚢 Global Disruption Tracker : A Smart Supply Chain Disruption Tracker

A real-time AI-powered system to detect and respond to global supply chain disruptions through live news classification and route re-optimization.

---

## 📍 Problem Statement

Current global shipping systems are vulnerable to real-world events like:  
- Geopolitical unrest  
- Port strikes  
- Natural disasters  

Yet there’s no intelligent system that dynamically adjusts routes based on live disruption intelligence.

---

## ✅ Our Solution

We built a tool that:

- 🔎 Fetches **live news** on supply chain risks  
- 🧠 Uses a **BERT-based AI model** to classify disruption types  
- 📍 Maps **risk levels to ports**  
- 🔄 Automatically **reroutes around danger zones**  
- 📊 Visualizes this on a live dashboard with port-level drilldowns

---

## 🧠 How It Works

1. **News Collection**:  
   - Uses the `GoogleNews` Python module to gather recent disruption headlines.

2. **AI Classification**:  
   - Headlines are classified using a fine-tuned BERT model into:  
     - Port Closure  
     - Geopolitical Unrest  
     - Shipping Delay

3. **Risk Mapping**:  
   - Ports are marked as Safe or High Risk based on classification output.

4. **Route Switching**:  
   - If any port in the primary route is high risk, the system switches to a safer alternate route.

5. **Dashboard View**:  
   - Live, interactive React + Leaflet maps  
   - Shows both routes, risk panels, and full news summaries

---

## 🖥️ Tech Stack

- **Frontend**: React.js, Leaflet.js, React Router  
- **Backend**: Node.js with Express  
- **AI Model**: BERT (via HuggingFace Transformers)  
- **Data Fetching**: GoogleNews Python module

---

## 📊 Features

- Real-time disruption news feed  
- Headline classification with AI  
- Port-wise risk level tagging  
- Rerouting around disruption zones  
- Interactive map with tooltips and popups  
- News detail pages for full context

---

## ⚙️ How to Run the Project

### 🔧 Frontend (React)

```bash
cd client
npm install
npm start

```
### 🔧 Backend (Node.js + Express)

```bash

cd server
npm install
npm start

```
The backend serves port and route data based on disruption logic. Routes are rerouted dynamically if any port is marked high risk.

### 🧠 AI Training 
If you want to retrain the model:

```bash

pip install transformers torch pandas scikit-learn GoogleNews
python train_model.py

```
Training includes headline scraping, labeling, and fine-tuning BERT for disruption classification.

---

## 📂 Project Structure



/client        → React frontend (dashboard)
/server        → Express backend API
/model         → Python code for BERT classification
index.csv      → News headlines + labels
README.md      → This file

---

## 🔁 Rerouting Logic


- In the demo, Primary route includes major ports like Salalah, Port Said, etc.

- If any port has high disruption risk, an alternate path is used:

  - Around the Cape of Good Hope

  - Via East African ports (Mombasa, Durban, Cape Town)

---

## 🚀 Future Enhancements

- Real-time model inference in backend

- Integration with satellite/port APIs

- Add severity scoring and ETA prediction

---

## 👥 Team

Manya Verma

Nripjeet Kaur

---

## 🏁 Submission Notes

- AI model is trained but mocked for faster frontend loading.

- Data is fetched live and rerouting logic is active.

- Fully working demo with map, news panel, and reroute switching.



---
