// src/pages/Home.jsx
import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/hero/Hero'
import EcoCard from '../components/cards/EcoCard'
//import StatsCounter from '../components/stats/StatsCounter'

const Home = () => {
  const ecoCards = [
    {
      title: "Save Water",
      icon: "💧",
      description: "Conserve water with smart usage practices and reduce wastage.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Use Solar",
      icon: "☀️",
      description: "Harness solar energy to power your home and reduce carbon footprint.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Plant Trees",
      icon: "🌳",
      description: "Join reforestation efforts to restore ecosystems and combat climate change.",
      color: "from-green-500 to-emerald-600"
    }
  ]

  const stats = [
    { value: 124, suffix: 'M', label: 'Trees Planted' },
    { value: 56, suffix: 'M', label: 'CO₂ Reduced (tons)' },
    { value: 42, suffix: '%', label: 'Renewable Energy' },
    { value: 250, suffix: 'K', label: 'Volunteers' }
  ]

  return (
    <div>
      <Hero />
      
      {/* Eco Cards Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
          >
            How You Can <span className="text-green-500">Make a Difference</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecoCards.map((card, index) => (
              <EcoCard
                key={index}
                title={card.title}
                icon={card.icon}
                description={card.description}
                color={card.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-400 to-blue-400">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          >
            Our <span className="text-white">Impact</span> in Numbers
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatsCounter
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home