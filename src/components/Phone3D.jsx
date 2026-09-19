import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, RoundedBox, Text } from '@react-three/drei'
import { useRef, useState } from 'react'

const labels = { camera: 'CAMERA', display: 'DISPLAY', processor: 'PERFORMANCE', battery: 'BATTERY', sensors: 'SENSORS' }

function Hotspot({ position, type, onSelect }) {
  const [over, setOver] = useState(false)
  return <group position={position}>
    <mesh onPointerOver={(e) => { e.stopPropagation(); setOver(true); document.body.style.cursor = 'pointer' }} onPointerOut={() => { setOver(false); document.body.style.cursor = 'default' }} onClick={(e) => { e.stopPropagation(); onSelect(type) }}>
      <sphereGeometry args={[.135, 24, 24]} /><meshBasicMaterial color={over ? '#fff2c4' : '#d5ae61'} transparent opacity={over ? .96 : .58} />
    </mesh>
    {over && <Text position={[.24, 0, 0]} fontSize={.105} color="#fff" anchorX="left">{labels[type]}</Text>}
  </group>
}

function Lens({ position, size = .255 }) {
  return <group position={position} rotation={[Math.PI / 2, 0, 0]}>
    <mesh position={[0, 0, -.012]}><cylinderGeometry args={[size + .062, size + .062, .058, 48]} /><meshStandardMaterial color="#b3b7bc" metalness={1} roughness={.18} /></mesh>
    <mesh position={[0, 0, -.051]}><cylinderGeometry args={[size, size, .065, 48]} /><meshPhysicalMaterial color="#05080d" metalness={.72} roughness={.08} clearcoat={1} clearcoatRoughness={.05} /></mesh>
    <mesh position={[0, 0, -.091]}><cylinderGeometry args={[size * .73, size * .73, .011, 48]} /><meshPhysicalMaterial color="#102a42" metalness={.65} roughness={.02} transmission={.08} clearcoat={1} /></mesh>
    <mesh position={[-size * .22, size * .18, -.102]}><circleGeometry args={[size * .15, 20]} /><meshBasicMaterial color="#7ab6eb" transparent opacity={.65} /></mesh>
  </group>
}

function CameraIsland({ onSelect }) {
  return <group position={[-.47, 1.38, -.335]}>
    <RoundedBox args={[1.52, 1.65, .18]} radius={.29} smoothness={10}><meshPhysicalMaterial color="#0d1118" roughness={.14} metalness={.7} clearcoat={1} /></RoundedBox>
    <RoundedBox args={[1.42, 1.55, .035]} radius={.24} smoothness={10} position={[0, 0, -.112]}><meshPhysicalMaterial color="#06090d" roughness={.08} metalness={.4} clearcoat={1} /></RoundedBox>
    <Lens position={[-.35, .38, -.15]} /><Lens position={[.35, .38, -.15]} /><Lens position={[-.35, -.38, -.15]} />
    <group position={[.35, -.38, -.17]} rotation={[Math.PI / 2, 0, 0]}><mesh><cylinderGeometry args={[.17,.17,.047,32]} /><meshStandardMaterial color="#171b22" metalness={.6} roughness={.15} /></mesh><mesh position={[0,0,-.03]}><circleGeometry args={[.1,24]} /><meshBasicMaterial color="#f4eac6" /></mesh></group>
    <Text position={[.27, -.05, -.19]} fontSize={.062} color="#88919c" anchorX="center">100X</Text>
    <Text position={[.27, -.14, -.19]} fontSize={.038} color="#59616b" anchorX="center">AI CAMERA</Text>
    <Hotspot position={[.62, .64, -.28]} type="camera" onSelect={onSelect} />
  </group>
}

function Phone({ onSelect }) {
  const pearl = '#e6e6e3'
  return <group rotation={[.14, -.62, .045]}>
    {/* continuous metal chassis with inset glass panels */}
    <RoundedBox args={[2.55, 5.55, .42]} radius={.31} smoothness={12}><meshStandardMaterial color="#9da2a9" metalness={.95} roughness={.17} /></RoundedBox>
    <RoundedBox args={[2.47, 5.47, .18]} radius={.27} smoothness={12} position={[0,0,-.23]}><meshPhysicalMaterial color={pearl} roughness={.22} metalness={.13} clearcoat={1} clearcoatRoughness={.12} /></RoundedBox>
    {/* subtle rear pearl panels echo the reference's flowing metallic finish */}
    <mesh position={[.2,-.45,-.337]} rotation={[0,0,.46]}><planeGeometry args={[.46,3.7]} /><meshPhysicalMaterial color="#ffffff" transparent opacity={.15} roughness={.1} /></mesh>
    <mesh position={[.62,-.2,-.341]} rotation={[0,0,-.38]}><planeGeometry args={[.14,3.0]} /><meshBasicMaterial color="#cfa347" transparent opacity={.5} /></mesh>
    <CameraIsland onSelect={onSelect} />
    {/* front: thin black bezel, display glass and centered punch-hole */}
    <RoundedBox args={[2.46, 5.46, .17]} radius={.27} smoothness={12} position={[0,0,.23]}><meshPhysicalMaterial color="#05070b" roughness={.14} metalness={.12} clearcoat={1} /></RoundedBox>
    <RoundedBox args={[2.33, 5.31, .025]} radius={.21} smoothness={10} position={[0,0,.327]}><meshPhysicalMaterial color="#172235" emissive="#0a1830" emissiveIntensity={.5} roughness={.08} metalness={.08} clearcoat={1} /></RoundedBox>
    <mesh position={[0,2.17,.347]}><circleGeometry args={[.062,32]} /><meshBasicMaterial color="#020407" /></mesh>
    <mesh position={[.3,.5,.345]} rotation={[0,0,-.42]}><planeGeometry args={[.34,3.7]} /><meshBasicMaterial color="#dcecff" transparent opacity={.06} /></mesh>
    {/* physical side keys */}
    <RoundedBox args={[.09,.76,.14]} radius={.035} position={[1.31,.3,.025]}><meshStandardMaterial color="#727982" metalness={1} roughness={.2} /></RoundedBox>
    <RoundedBox args={[.09,.34,.14]} radius={.035} position={[-1.31,.42,.025]}><meshStandardMaterial color="#727982" metalness={1} roughness={.2} /></RoundedBox>
    {/* USB-C and speaker perforations */}
    <group position={[0,-2.79,0]} rotation={[Math.PI/2,0,0]}><mesh><boxGeometry args={[.5,.08,.13]} /><meshStandardMaterial color="#171a1e" metalness={.8} roughness={.25} /></mesh>{[-.82,-.64,.64,.82].map(x=><mesh key={x} position={[x,0,0]}><cylinderGeometry args={[.032,.032,.105,16]} /><meshBasicMaterial color="#111317" /></mesh>)}</group>
    <Hotspot position={[-.9,-.45,.41]} type="display" onSelect={onSelect} />
    <Hotspot position={[.67,-.2,-.42]} type="processor" onSelect={onSelect} />
    <Hotspot position={[.22,-1.56,-.43]} type="battery" onSelect={onSelect} />
    <Hotspot position={[.93,.85,-.4]} type="sensors" onSelect={onSelect} />
  </group>
}

function Scene({ onSelect, reset }) {
  const controls = useRef(); reset.current = () => controls.current?.reset()
  return <><ambientLight intensity={.55} /><spotLight position={[5,7,6]} intensity={150} angle={.55} penumbra={1} color="#d9e7ff" /><spotLight position={[-5,1,3]} intensity={75} angle={.7} penumbra={1} color="#e2b96f" /><pointLight position={[0,1,-5]} intensity={45} color="#7899ff" /><Phone onSelect={onSelect} /><ContactShadows position={[0,-3.12,0]} opacity={.5} scale={9} blur={2.5} far={5} /><Environment preset="city" /><OrbitControls ref={controls} enablePan={false} minDistance={5.5} maxDistance={9} minPolarAngle={.8} maxPolarAngle={2.25} /></>
}

export default function Phone3D({ onSelect }) { const reset = useRef(); return <div className="phone-stage"><Canvas camera={{position:[0,0,7],fov:34}} dpr={[1,2]}><Scene onSelect={onSelect} reset={reset} /></Canvas><div className="hint">DRAG TO EXPLORE　↻　SCROLL TO ZOOM</div><button className="reset" onClick={() => reset.current?.()}>⌾ Reset view</button></div> }
