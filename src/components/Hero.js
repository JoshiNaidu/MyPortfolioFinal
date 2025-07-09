import { useEffect, useState, Suspense } from "react"
import { ChevronDown } from 'lucide-react'
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const shapes = [
    { position: [4, 2, -5], color: "#8B5CF6", scale: 0.6 },
    { position: [-4, 1, -4], color: "#06B6D4", scale: 0.5 },
    { position: [3, -2, -6], color: "#F59E0B", scale: 0.8 },
    { position: [-3, -1, -5], color: "#EF4444", scale: 0.4 },
    { position: [2, 3, -4], color: "#10B981", scale: 0.5 },
    { position: [-2, 2, -6], color: "#8B5CF6", scale: 0.6 },
    { position: [4, -1, -4], color: "#F97316", scale: 0.5 },
    { position: [-3, -3, -5], color: "#06B6D4", scale: 0.4 },
]

const capabilities = [
    { label: 'Problem Solving', color: 'skyblue', shape: 'sphere' },
    { label: 'Creativity', color: 'hotpink', shape: 'torus' },
    { label: 'Teamwork', color: 'orange', shape: 'cone' },
    { label: 'Adaptability', color: 'green', shape: 'box' },
    { label: 'Leadership', color: 'purple', shape: 'icosahedron' },
    { label: 'Communication', color: 'gold', shape: 'cylinder' },
  ];

  function getShapeGeometry(shape) {
    switch (shape) {
      case 'sphere':
        return <sphereGeometry args={[1, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 100]} />;
      case 'cone':
        return <coneGeometry args={[1, 2, 32]} />;
      case 'box':
        return <boxGeometry args={[1.5, 1.5, 1.5]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'cylinder':
        return <cylinderGeometry args={[0.8, 0.8, 2, 32]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  }

  function CapabilityShape({ index, label, color, shape }) {
    const groupRef = useRef();
  
    useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      const radius = 5 + index * 1.2;
      const speed = 0.2 + index * 0.05;
      const angle = t * speed;
  
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
  
      groupRef.current.position.set(x, 0, z);
      groupRef.current.rotation.y += 0.01;
    });
  
    return (
      <group ref={groupRef}>
        <mesh scale={0.8}>
          {getShapeGeometry(shape)}
          <meshStandardMaterial color={color} />
        </mesh>
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    );
  }
  

const RotatingShape = ({ index, color, scale }) => {
    const meshRef = useRef();
    const orbitRadius = 3 + index * 1.5;       // each shape has a unique radius
    const orbitSpeed = 0.5 + index * 0.1;      // different speed for each
    const orbitAxis = new THREE.Vector3(0, 1, 0); // orbiting around Y-axis

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * orbitSpeed;

        // Circular orbit on XZ plane
        const x = orbitRadius * Math.cos(t);
        const z = orbitRadius * Math.sin(t);
        const y = Math.sin(t * 0.5) * 0.5; // slight bobbing up and down

        meshRef.current.position.set(x, y, z);

        // Add slow self-rotation
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef} scale={scale}>
            {index % 3 === 0 ? (
                <sphereGeometry args={[1, 32, 32]} />
            ) : index % 3 === 1 ? (
                <boxGeometry args={[1, 1, 1]} />
            ) : (
                <torusGeometry args={[0.6, 0.2, 16, 32]} />
            )}
            <meshStandardMaterial color={color} />
        </mesh>
    );
};





const Hero = () => {
    const [text, setText] = useState("")
    const [nameVisible, setNameVisible] = useState(false)
    const fullText = "Software Developer"

    useEffect(() => {
        setNameVisible(true)

        const nameDelay = setTimeout(() => {
            let index = 0
            const timer = setInterval(() => {
                setText(fullText.slice(0, index))
                index++
                if (index > fullText.length) {
                    clearInterval(timer)
                }
            }, 100)
        }, 1000)

        return () => clearTimeout(nameDelay)
    }, [])

    return (
        <>
            <div className="absolute inset-0 z-0">
                {/* <Canvas
                    camera={{ position: [0, 0, 10], fov: 70 }}
                    gl={{ antialias: true, alpha: true }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                    }}
                >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={null}>
                        {shapes.map((shape, index) => (
                            <RotatingShape key={index} {...shape} index={index} />
                        ))}
                    </Suspense>
                </Canvas> */}

<Canvas camera={{ position: [0, 6, 14], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />

      {capabilities.map((cap, i) => (
        <CapabilityShape key={i} index={i} {...cap} />
      ))}
    </Canvas>
            </div>

            <div className="relative z-20 flex items-center justify-center h-screen text-center px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6">
                        <div
                            className={`transform transition-all duration-1000 ease-out ${nameVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                                }`}
                        >
                            <span className="text-purple-400">MATTA </span>
                            <span className="text-white">JOSHI</span>
                        </div>
                    </h1>

                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-300 mb-6 sm:mb-8 h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20">
                        <span className="border-r-2 border-purple-400 pr-2 animate-pulse">{text}</span>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                        Passionate Web Developer with 3.5+ years of experience, specializing in React.js, JavaScript, Angular, and
                        WordPress. Dedicated to crafting seamless, user-centric solutions with innovation and excellence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="#about"
                            className="w-full sm:w-auto border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-center"
                        >
                            Learn More
                        </a>
                    </div>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="text-purple-400" size={32} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero