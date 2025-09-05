// src/pages/Projects.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'

function RotatingElement() {
  return (
    <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#10b981" roughness={0.3} metalness={0.7} />
    </Sphere>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Urban Reforestation Initiative",
      description: "Planting trees in urban areas to combat air pollution and provide green spaces.",
      category: "reforestation",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      progress: 75,
      supporters: 1250,
      location: "Global Cities"
    },
    {
      id: 2,
      title: "Ocean Cleanup Project",
      description: "Removing plastic waste from oceans and coastlines to protect marine life.",
      category: "conservation",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      progress: 60,
      supporters: 890,
      location: "Pacific Ocean"
    },
    {
      id: 3,
      title: "Renewable Energy for Communities",
      description: "Providing solar power to remote communities without access to electricity.",
      category: "energy",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      progress: 45,
      supporters: 670,
      location: "Africa & Asia"
    },
    {
      id: 4,
      title: "Water Purification Systems",
      description: "Installing clean water solutions in areas affected by water scarcity.",
      category: "water",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/4/414377426/EZ/BO/HC/153323108/water-purification-systems-500x500.png",
      progress: 85,
      supporters: 1540,
      location: "South America"
    },
    {
      id: 5,
      title: "Sustainable Agriculture Program",
      description: "Training farmers in eco-friendly practices to reduce environmental impact.",
      category: "agriculture",
      image: "https://tse4.mm.bing.net/th/id/OIP.m-U5pX13B5CIJ1_Gtxc_yQHaEK?pid=Api&P=0&h=220",
      progress: 70,
      supporters: 980,
      location: "Global"
    },
    {
      id: 6,
      title: "Wildlife Protection Initiative",
      description: "Creating protected areas and corridors for endangered species.",
      category: "conservation",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      progress: 55,
      supporters: 1120,
      location: "Various Regions"
    }
  ]

  const filters = [
    { id: 'all', name: 'All Projects', icon: '🌍' },
    { id: 'reforestation', name: 'Reforestation', icon: '🌳' },
    { id: 'conservation', name: 'Conservation', icon: '🛡️' },
    { id: 'energy', name: 'Energy', icon: '⚡' },
    { id: 'water', name: 'Water', icon: '💧' },
    { id: 'agriculture', name: 'Agriculture', icon: '🌾' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Our <span className="text-green-500">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the environmental initiatives we're working on to create a sustainable future for our planet.
          </p>
        </motion.div>

        {/* 3D Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-64 bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl mb-12 overflow-hidden"
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <RotatingElement />
            <OrbitControls 
              enableZoom={false}
              autoRotate
              autoRotateSpeed={3}
            />
          </Canvas>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center px-4 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.location}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-green-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.supporters.toLocaleString()} supporters
                  </span>
                  <motion.button
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Support
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Want to Start Your Own Project?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We support community-led environmental initiatives. Get in touch to learn how we can help.
          </p>
          <motion.button
            className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}