import React from 'react'
import { motion } from "framer-motion"

export default function Scale() {
    return (
        <motion.div
            style={{ backgroundColor: 'pink', height: 300, width: 300 }}
            animate={{ scale: 2 }}
            transition={{ duration: 0.5 }}
        />
    )
}