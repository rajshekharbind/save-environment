// src/pages/Blog.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: "10 Ways to Reduce Your Carbon Footprint",
      excerpt: "Simple changes you can make today to help the environment...",
      category: "sustainability",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "March 15, 2023",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Renewable Energy",
      excerpt: "Exploring the latest advancements in solar and wind power...",
      category: "energy",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "March 12, 2023",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Water Conservation Techniques for Urban Areas",
      excerpt: "How cities can better manage their water resources...",
      category: "water",
      image: "https://www.researchgate.net/publication/279827927/figure/fig1/AS:649322261651464@1531821899751/Idealised-section-of-urban-water-conservation-measures.png",
      date: "March 10, 2023",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Protecting Marine Ecosystems",
      excerpt: "The importance of ocean conservation and how you can help...",
      category: "conservation",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "March 8, 2023",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Sustainable Agriculture Practices",
      excerpt: "How farming can work in harmony with nature...",
      category: "sustainability",
      image: "https://khetibuddy.com/wp-content/uploads/2023/03/top-sustainable-farming-methods.jpg",
      date: "March 5, 2023",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "The Impact of Plastic Pollution",
      excerpt: "Understanding the global plastic crisis and solutions...",
      category: "conservation",
      image: "https://as1.ftcdn.net/v2/jpg/06/83/89/40/1000_F_683894090_8AaGQgGmeRm1cwWgk9LkdWTBRy2Pc0y9.jpg",
      date: "March 3, 2023",
      readTime: "6 min read"
    }
  ]

  // const categories = [
  //   { id: 'all', name: 'All Topics', icon: '🌍' },
  //   { id: 'sustainability', name: 'Sustainability', icon: '♻️' },
  //   { id: 'energy', name: 'Energy', icon: '⚡' },
  //   { id: 'water', name: 'Water', icon: '💧' },
  //   { id: 'conservation', name: 'Conservation', icon: '🛡️' }
  // ]

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Environmental <span className="text-green-500">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest news, tips, and insights about environmental conservation and sustainability.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 hover:text-green-500 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <motion.button
                    className="text-green-500 hover:text-green-600 font-semibold flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <span className="ml-1">→</span>
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">Subscribe to our newsletter for the latest environmental news and tips.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}