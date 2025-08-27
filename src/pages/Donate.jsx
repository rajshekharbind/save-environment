// src/pages/Donate.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Donate() {
  const navigate = useNavigate();
  const [donationAmount, setDonationAmount] = useState(25);
  const [selectedPlan, setSelectedPlan] = useState("one-time");
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const presetAmounts = [10, 25, 50, 100, 250, 500];
  const donationPlans = [
    { id: "one-time", label: "One-time", icon: "🎁" },
    { id: "monthly", label: "Monthly", icon: "🔄" },
    { id: "quarterly", label: "Quarterly", icon: "📅" },
    { id: "yearly", label: "Yearly", icon: "⭐" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate donation processing
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Thank you for your $${donationAmount} donation!`);
      navigate("/");
    }, 2000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      rotateZ: 2,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            Support Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
              Mission
            </span>
          </motion.h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your donation helps us continue our work in environmental conservation, 
            sustainability projects, and community education. Every contribution makes a difference!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donation Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Make a Donation
            </h2>

            <form onSubmit={handleDonationSubmit}>
              {/* Donation Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Donation Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {donationPlans.map((plan) => (
                    <motion.button
                      key={plan.id}
                      type="button"
                      className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
                        selectedPlan === plan.id
                          ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                          : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-green-300"
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xl mb-1">{plan.icon}</span>
                      <span className="text-sm font-medium">{plan.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Select Amount ($)
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((amount) => (
                    <motion.button
                      key={amount}
                      type="button"
                      className={`py-3 px-4 rounded-lg font-medium transition-all ${
                        donationAmount === amount
                          ? "bg-green-500 text-white shadow-lg"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30"
                      }`}
                      onClick={() => setDonationAmount(amount)}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      ${amount}
                    </motion.button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    min="1"
                  />
                </div>
              </div>

              {/* Personal Information */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                  Your Information
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                  Payment Details
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 px-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  `Donate $${donationAmount}`
                )}
                {/* Ripple effect */}
                <motion.span 
                  className="absolute inset-0 bg-white opacity-0 rounded-full"
                  whileHover={{ opacity: 0.1, scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>

          {/* Impact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            {/* Impact Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl shadow-xl p-6 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">🌳</span>
                  <div>
                    <p className="font-semibold">Plant {Math.floor(donationAmount / 10)} Trees</p>
                    <p className="text-green-100 text-sm">$10 plants one tree</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl mr-4">💧</span>
                  <div>
                    <p className="font-semibold">Provide {donationAmount * 10} Liters of Clean Water</p>
                    <p className="text-green-100 text-sm">$1 provides 10 liters</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl mr-4">☀️</span>
                  <div>
                    <p className="font-semibold">Offset {donationAmount * 50} kg of CO₂</p>
                    <p className="text-green-100 text-sm">$1 offsets 50kg of carbon</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Security Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="text-2xl mr-2">🔒</span> Secure Donation
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>256-bit SSL encryption</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>PCI DSS compliant</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Tax-deductible receipt provided</span>
                </li>
              </ul>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">John Doe</h4>
                  <p className="text-green-500 text-sm">Monthly supporter</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "I've been donating monthly for two years now. Seeing the impact reports and knowing my contribution is making a real difference keeps me motivated. The process is seamless and secure."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Is my donation tax-deductible?",
                answer: "Yes, we are a registered 501(c)(3) organization. You will receive a receipt for tax purposes."
              },
              {
                question: "How is my donation used?",
                answer: "85% of donations go directly to program expenses, 10% to administrative costs, and 5% to fundraising efforts."
              },
              {
                question: "Can I cancel my recurring donation?",
                answer: "Yes, you can cancel or modify your recurring donation at any time through your account settings."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for donations."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
              >
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating elements for visual interest */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 opacity-20"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + i * 10}%`,
              fontSize: `${24 + i * 8}px`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            {i % 2 === 0 ? "🌿" : "🍃"}
          </motion.div>
        ))}
      </div>
    </div>
  );
}