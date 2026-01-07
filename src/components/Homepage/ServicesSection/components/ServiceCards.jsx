import React, { useState } from "react";
// import { motion } from "framer-motion";

const ServiceCards = ({ services }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return(
  <div className="min-h-screen bg-transparent flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-700 text-sm dark:text-gray-400 tracking-widest uppercase mb-2">SERVICES</p>
          <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-200">
            What <span className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">I do.</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                relative rounded-2xl p-8 transition-all duration-500 cursor-pointer overflow-hidden
                ${service.bgColor === 'bg-cyan-400' ? 'bg-cyan-400' : 'bg-gray-800'}
                ${hoveredCard === service.id ? 'transform -translate-y-3 scale-105' : ''}
              `}
              style={{
                boxShadow: hoveredCard === service.id 
                  ? service.bgColor === 'bg-cyan-400'
                    ? '0 20px 60px rgba(34, 211, 238, 0.4)'
                    : '0 20px 60px rgba(0, 0, 0, 0.6)'
                  : '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Background Number */}
              <div 
                className={`
                  absolute top-4 right-4 text-8xl font-bold transition-all duration-500
                  ${service.bgColor === 'bg-cyan-400' ? 'text-cyan-300' : 'text-gray-700'}
                  ${hoveredCard === service.id ? 'opacity-60 scale-110' : 'opacity-20'}
                `}
              >
                {service.number}
              </div>

              {/* Icon */}
              <div 
                className={`
                  w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10
                  transition-all duration-500
                  ${service.bgColor === 'bg-cyan-400' ? 'bg-white text-cyan-400' : 'bg-gray-700 text-white'}
                  ${hoveredCard === service.id ? 'transform rotate-12 scale-110' : ''}
                `}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 
                  className={`
                    text-2xl font-bold mb-4 transition-all duration-300
                    ${service.textColor}
                    ${hoveredCard === service.id ? 'transform translate-x-2' : ''}
                  `}
                >
                  {service.title}
                </h3>
                <p 
                  className={`
                    leading-relaxed transition-all duration-300
                    ${service.bgColor === 'bg-cyan-400' ? 'text-gray-800' : 'text-gray-400'}
                    ${hoveredCard === service.id ? 'transform translate-x-2' : ''}
                  `}
                >
                  {service.description}
                </p>
              </div>

              {/* Hover Gradient Overlay */}
              <div 
                className={`
                  absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none
                  ${service.bgColor === 'bg-cyan-400' 
                    ? 'bg-gradient-to-br from-cyan-300/20 to-transparent' 
                    : 'bg-gradient-to-br from-cyan-400/10 to-transparent'}
                  ${hoveredCard === service.id ? 'opacity-100' : 'opacity-0'}
                `}
              />

              {/* Border Glow Effect */}
              <div 
                className={`
                  absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none
                  ${service.bgColor === 'bg-cyan-400'
                    ? 'ring-2 ring-cyan-300'
                    : 'ring-2 ring-cyan-400'}
                  ${hoveredCard === service.id ? 'opacity-100' : 'opacity-0'}
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;

