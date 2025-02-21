import { motion } from "motion/react";
import React from "react";

const App = () => {
  return (
    <motion.div className="w-full h-screen flex justify-center items-center bg-zinc-800">
      {/* <motion.div
        // initial={{ x: -1000, rotate: 0 }}
        animate={{
          x: 100,
          rotate: 180,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease:"anticipate"
          // type: "spring",
          // stiffness: 100,
          // damping: 20,
        }}
        className="w-40 h-40 flex justify-center items-center bg-black text-white text-xl"
      >
        <motion.h1 className="h1">h1 ! my name is umar</motion.h1>
      </motion.div> */}
        <motion.div 
        animate={{
          x: [0,200,200,0,0],
          y: [0,0,200,200,0],
          // rotate: 180,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          
          ease:"anticipate"
          // type: "spring",
          // stiffness: 100,
          // damping: 20,
        }}
        className="w-20 h-20 bg-red-500"

        >
          hiii
        </motion.div>
    </motion.div>
  );
};

export default App;
