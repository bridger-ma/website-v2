"use client"

import { type FC, useState } from "react"
import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  description?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-12">
      <motion.h2
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-gradient inline-block cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={itemVariants}
        className={`h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mt-1 transition-all duration-300 ease-in-out ${
          isHovered ? "w-48" : "w-24"
        }`}
      ></motion.div>
      <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto mt-6">
        {description}
      </motion.p>
    </motion.div>
  )
}
export default SectionTitle

