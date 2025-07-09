import { useState, Suspense, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Eye, EyeOff } from 'lucide-react'
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Text } from '@react-three/drei';

const shapeTypes = ["box", "sphere", "cone", "cylinder", "torus"]

const OrbitingSkill = ({ name, color, radius, angleSpeed, index }) => {
  const groupRef = useRef()

  // Animate orbital rotation
  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * angleSpeed
  })

  const shapeType = shapeTypes[index % shapeTypes.length]

  const geometry =
    shapeType === "box" ? <boxGeometry args={[0.5, 0.5, 0.5]} /> :
    shapeType === "sphere" ? <sphereGeometry args={[0.35, 32, 32]} /> :
    shapeType === "cone" ? <coneGeometry args={[0.35, 0.6, 32]} /> :
    shapeType === "cylinder" ? <cylinderGeometry args={[0.3, 0.3, 0.6, 32]} /> :
    <torusGeometry args={[0.3, 0.1, 16, 100]} />

  return (
    <group ref={groupRef}>
      {/* Position the shape away from center on orbit radius */}
      <group position={[radius, 0, 0]}>
        <mesh>
          {geometry}
          <meshStandardMaterial color={color} transparent opacity={0.8} />
        </mesh>
        <Text
          position={[0, -0.7, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </group>
    </group>
  )
}

const Simple3DSkills = () => {
  const skills = [
    { name: "ReactJS", color: "#61DAFB" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "Angular", color: "#DD0031" },
    { name: "WordPress", color: "#21759B" },
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
    { name: "Bootstrap", color: "#7952B3" },
    { name: "Material UI", color: "#0081CB" },
    { name: "Git", color: "#F05032" },
  ]

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />

      {skills.map((skill, index) => (
        <OrbitingSkill
          key={skill.name}
          name={skill.name}
          color={skill.color}
          index={index}
          radius={2 + index * 0.5} // distance from center
          angleSpeed={0.2 + index * 0.03} // different speeds for visual effect
        />
      ))}
    </>
  )
}


const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [is3DView, setIs3DView] = useState(true)
  const [canRender3D, setCanRender3D] = useState(false)

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas")
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        setCanRender3D(!!gl)
      } catch (e) {
        setCanRender3D(false)
      }
    }

    checkWebGL()
  }, [])

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "ReactJS", level: 95, color: "bg-blue-500" },
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "HTML5", level: 95, color: "bg-orange-500" },
        { name: "CSS3", level: 90, color: "bg-blue-600" },
        { name: "Bootstrap", level: 85, color: "bg-purple-600" },
        { name: "Material UI", level: 80, color: "bg-blue-400" },
      ],
    },
    backend: {
      title: "Backend & Tools",
      skills: [
        { name: "WordPress", level: 85, color: "bg-blue-700" },
        { name: "PHP", level: 75, color: "bg-purple-700" },
        { name: "Git", level: 90, color: "bg-red-500" },
        { name: "Angular", level: 80, color: "bg-red-600" },
      ],
    },
    other: {
      title: "Other Skills",
      skills: [
        { name: "Problem Solving", level: 95, color: "bg-green-500" },
        { name: "Team Leadership", level: 85, color: "bg-indigo-500" },
        { name: "Project Management", level: 80, color: "bg-pink-500" },
        { name: "API Integration", level: 90, color: "bg-teal-500" },
      ],
    },
  }

  const skills3D = [
    { name: "ReactJS", color: "#61DAFB" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "Angular", color: "#DD0031" },
    { name: "WordPress", color: "#21759B" },
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
    { name: "Bootstrap", color: "#7952B3" },
    { name: "Material UI", color: "#0081CB" },
    { name: "Git", color: "#F05032" },
  ]

  const Fallback3D = () => (
    <div className="h-[600px] w-full bg-slate-900/50 rounded-xl border border-slate-700 mb-8 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {skills3D.map((skill, index) => (
          <div
            key={skill.name}
            className="absolute w-20 h-20 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce"
            style={{
              backgroundColor: skill.color,
              left: `${10 + (index % 3) * 30}%`,
              top: `${15 + Math.floor(index / 3) * 25}%`,
              animationDelay: `${index * 0.3}s`,
              animationDuration: "3s",
            }}
          >
            {skill.name}
          </div>
        ))}
      </div>
      <div className="relative z-10 text-center bg-slate-800/80 p-8 rounded-xl">
        <div className="text-purple-400 text-2xl mb-4">🎮 Interactive Skills</div>
        <div className="text-white text-lg mb-2">3D View Available!</div>
        <div className="text-gray-400 text-sm">Showing animated skills visualization</div>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Technical <span className="text-purple-400">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setIs3DView(!is3DView)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            is3DView ? "bg-purple-600 text-white" : "bg-slate-800 text-gray-300 hover:bg-slate-700"
          }`}
        >
          {is3DView ? <EyeOff size={20} /> : <Eye size={20} />}
          {is3DView ? "Switch to 2D View" : "Switch to 3D View"}
        </button>
      </div>

      {is3DView ? (
        canRender3D ? (
          <div className="h-[600px] w-full bg-slate-900/50 rounded-xl border border-slate-700 mb-8">
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }} gl={{ preserveDrawingBuffer: true, antialias: true }}>
              <Suspense fallback={null}>
                <Simple3DSkills />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
              </Suspense>
            </Canvas>
          </div>
        ) : (
          <Fallback3D />
        )
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeCategory === key ? "bg-purple-600 text-white" : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-slate-800/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-slate-700"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-semibold text-base sm:text-lg">{skill.name}</h3>
                  <span className="text-purple-400 font-bold text-sm sm:text-base">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 sm:h-3">
                  <div
                    className={`h-2 sm:h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="mt-16 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Languages</h3>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {["English", "Telugu", "Hindi"].map((lang) => (
            <span
              key={lang}
              className="bg-purple-600/20 text-purple-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-medium"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills