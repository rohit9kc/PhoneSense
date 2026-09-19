import {useState} from 'react'
import './App.css'
import Header from './components/Header'
import Phone3D from './components/Phone3D'
import PhoneInfo from './components/PhoneInfo'
import Diagnostics from './components/Diagnostics'
import AIChat from './components/AIChat'
export default function App(){const [selected,setSelected]=useState('camera');return <main id="top"><Header/><section id="twin" className="hero"><div className="hero-copy"><p className="device"><i/> iQOO 15 LEGEND</p><h1>Your phone,<br/><em>understood.</em></h1><p>Explore your device in 3D. Understand its hardware. Talk to an AI that knows your phone.</p><div className="pills"><span>AI DIGITAL TWIN</span><span>LIVE INSIGHTS</span></div></div><Phone3D onSelect={setSelected}/><PhoneInfo selected={selected} onClose={()=>setSelected(null)}/></section><Diagnostics/><AIChat/><footer><span className="brand"><b>P</b> Phone<span>Sense</span></span><p>iQOO Hackathon 2026 concept prototype · Device data is simulated.</p></footer></main>}
