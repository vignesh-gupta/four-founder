"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/utils"

export function WhatsAppButton() {
  const handleClick = () => {
    const message = "Hello! I'm interested in Four Founders Garlic Company's premium products. Can you help me with more information about your garlic exports to Global?"
    window.open(getWhatsAppUrl(message), "_blank")
  }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
        <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </motion.button>
  )
}