# PhoneSense

### AI-powered digital twin and diagnostic companion for smartphones.

PhoneSense is a smartphone experience that combines an interactive 3D digital twin, hardware exploration, device diagnostics, and an AI companion into one interface.

Instead of treating a phone as a collection of specifications hidden inside settings pages, PhoneSense turns the device itself into an interactive source of information.

---

## What is PhoneSense?

PhoneSense allows users to explore their smartphone through an interactive 3D representation of the device.

Users can rotate and explore the phone, interact with hardware components, view specifications, check device diagnostics, and ask an AI companion questions about their phone.

The current prototype showcases an **iQOO 15 Legend-inspired device**.

---

## Core Experience

### 3D Digital Twin

Explore an interactive 3D representation of the smartphone.

Users can rotate and zoom around the device and interact with different hardware areas.

### Hardware Explorer

PhoneSense presents important hardware information through the digital twin, including:

- Camera system
- Display
- Processor and GPU
- Battery
- RAM and storage
- Sensors

Selecting a component opens contextual information about that part of the device.

### Diagnostics

The prototype includes a device diagnostics dashboard displaying information such as:

- Battery level
- Temperature
- Memory usage
- Storage usage
- Network status
- Overall device status

The current prototype uses simulated device data to demonstrate the intended experience.

### PhoneSense AI

The AI Companion allows users to ask natural-language questions about their device.

Example questions include:

- Why is my phone heating?
- How can I improve battery life?
- Can my phone handle demanding games?
- Which camera should I use at night?
- What is using my storage?

The goal is to make the assistant device-aware rather than functioning as a generic chatbot.

---

## Product Vision

The long-term vision of PhoneSense is to connect the digital twin with real device information.

A future mobile implementation could use available device signals such as battery state, temperature, storage, memory, sensors, and network information to provide more personalized diagnostics and recommendations.

The AI layer could then interpret this information and explain the state of the device in simple language.

### The PhoneSense Experience

**Explore your phone → Understand your hardware → Understand what is happening → Ask your phone anything.**

---

## Current Prototype

This repository contains the web prototype created to demonstrate the PhoneSense concept.

The current prototype focuses on:

- Interactive 3D smartphone visualization
- Hardware exploration
- Device information panels
- Simulated diagnostics
- AI companion interface
- Responsive premium dark UI

Real Android hardware integration and production AI infrastructure are outside the scope of this prototype and are intended for future development.

---

## Tech Stack

- React
- Vite
- JavaScript
- Three.js
- React Three Fiber
- React Three Drei
- CSS

---

## Project Structure

```text
PhoneSense/
├── public/
├── src/
│   ├── components/
│   │   ├── AIChat.jsx
│   │   ├── Diagnostics.jsx
│   │   ├── Header.jsx
│   │   ├── Phone3D.jsx
│   │   └── PhoneInfo.jsx
│   ├── data/
│   │   └── phoneData.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md

Run Locally
1. Clone the repository git clone https://github.com/rohit9kc/PhoneSense.git
2. Navigate to the project cd PhoneSense
3. Install dependencies npm install
4. Start the development server npm run dev

Future Direction

PhoneSense is designed to evolve from a web prototype into a mobile-first device companion.

Future development could include:

Real Android device information
Live battery and temperature monitoring
Storage and memory analysis
Sensor information
Network diagnostics
Device performance insights
Device-aware AI using real phone data
Support for multiple smartphone models
On-device or local AI capabilities

Hackathon

PhoneSense is being developed as a prototype for the iQOO Hackathon 2026.

The project explores how smartphone capabilities, 3D visualization, device information, and AI can be combined into a more intuitive phone experience.
ision

PhoneSense aims to make smartphones easier to understand by bringing hardware, device information, diagnostics, and AI together in one interactive experience.
