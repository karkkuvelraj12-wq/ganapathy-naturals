import { motion } from "framer-motion";

function FloatingLeaves() {
  return (
    <>
      <motion.div
        className="absolute left-20 top-10 z-20 text-5xl"
        animate={{
          y: [0, 400],
          x: [0, 40, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        🍃
      </motion.div>
    </>
  );
}

export default FloatingLeaves;