// src/pages/About.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

// Animated 3D Globe Component
function AnimatedGlobe() {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      if (hovered) {
        meshRef.current.rotation.x += delta * 0.4;
      }
    }
  });

  return (
    <Float speed={5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere 
        ref={meshRef} 
        args={[1.8, 100, 100]} 
        scale={hovered ? 1.1 : 1}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <MeshDistortMaterial
          color="#10b981"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          envMapIntensity={1}
        />
      </Sphere>
    </Float>
  );
}

// Floating Particles Component
function FloatingParticles({ count = 100 }) {
  const particlesRef = useRef();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 10;
    
    colors[i3] = Math.random() * 0.5 + 0.5;
    colors[i3 + 1] = Math.random() * 0.5 + 0.5;
    colors[i3 + 2] = Math.random() * 0.5 + 0.5;
  }
  
  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Team member data
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Environmental scientist with 10+ years of experience in sustainable waste management."
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Tech innovator passionate about using technology for environmental solutions."
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Sustainability",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Circular economy expert dedicated to creating zero-waste communities."
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Full-stack developer focused on building scalable environmental solutions."
  }
];

// Stats data
const stats = [
  { value: 50, suffix: "K+", label: "Users Worldwide" },
  { value: 120, suffix: "K+", label: "Tons of Waste Tracked" },
  { value: 85, suffix: "%", label: "Reduction in Landfill Waste" },
  { value: 30, suffix: "", label: "Countries Served" }
];

// Timeline data
const timeline = [
  {
    year: "2018",
    title: "Foundation",
    description: "EcoTrack was founded with a vision to revolutionize waste management."
  },
  // {
  //   year: "2019",
  //   title: "First Pilot",
  //   description: "Launched our first pilot program in three major cities."
  // },
  {
    year: "2020",
    title: "Platform Launch",
    description: "Released our comprehensive waste tracking platform."
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded our services to 15+ countries worldwide."
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Implemented AI-powered analytics for predictive waste management."
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-cyan-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob animation-delay-3000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">EcoTrack</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            EcoTrack is an innovative platform transforming sustainable waste management through technology, 
            data analytics, and community engagement for a cleaner, greener planet.
          </motion.p>
        </motion.section>

        {/* 3D Globe Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full h-96 md:h-[500px] mb-20 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-900"
        >
          <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <AnimatedGlobe />
            <FloatingParticles count={200} />
            <OrbitControls 
              enableZoom={true} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={2}
              minDistance={3}
              maxDistance={8}
            />
          </Canvas>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                {stat.value}{stat.suffix}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Mission/Vision/Values Tabs */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: "mission", label: "Our Mission", icon: "🎯" },
              { id: "vision", label: "Our Vision", icon: "🔭" },
              { id: "values", label: "Our Values", icon: "❤️" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700"
                }`}
              >
                <span className="mr-2 text-xl">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-lg"
          >
            {activeTab === "mission" && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Our Mission</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  To revolutionize waste management through innovative technology that empowers communities, 
                  businesses, and governments to track, reduce, and optimize their waste footprint for a 
                  sustainable future.
                </p>
              </div>
            )}
            
            {activeTab === "vision" && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Our Vision</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  We envision a world where waste is a resource, not a problem—where every community 
                  has the tools to achieve zero waste, circular economies thrive, and our planet's 
                  resources are valued and preserved for future generations.
                </p>
              </div>
            )}
            
            {activeTab === "values" && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: "🌱", title: "Sustainability", desc: "We prioritize long-term environmental health in all decisions." },
                    { icon: "🔍", title: "Transparency", desc: "We believe in open data and honest reporting about environmental impact." },
                    { icon: "🤝", title: "Collaboration", desc: "We work together with communities, businesses, and governments." }
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-green-50 dark:bg-gray-700 rounded-xl"
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-3xl mb-2">{value.icon}</div>
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">{value.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{value.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-300 dark:bg-green-600"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-12`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
              >
                <div className="w-1/2 px-6">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
                
                <div className="relative w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                  {item.year}
                </div>
                
                <div className="w-1/2 px-6"></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-green-600 dark:text-green-400 mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-12 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
            Together, we can create a sustainable future. Join thousands of others making a difference today.
          </p>
          <motion.button
            className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.section>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-5000 {
          animation-delay: 5s;
        }
      `}</style>
    </div>
  );
}