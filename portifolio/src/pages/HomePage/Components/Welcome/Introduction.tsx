import React from "react";
import { motion } from "framer-motion";
import picture from "../../../../assets/pictures/profile_picture.webp";
import Tilt from "react-parallax-tilt";
import IntroducrionText from "./IntroducrionText";
import red_deco from "../../../../assets/red_deco.svg";

const Introducrion = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 12,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex justify-center flex-row flex-wrap-reverse overflow-hidden bg-[#22F2FF] w-full h-auto p-16 border-b-[6px] border-black"
    >
      <motion.div variants={itemVariants}>
        <IntroducrionText />
      </motion.div>

      <motion.div 
        className="relative flex flex-col sm:mb-20 justify-center items-center"
        variants={containerVariants}
      >
        <motion.img
          variants={rotateVariants}
          animate="animate"
          alt="Geometric decoration"
          width="470"
          height="470"
          className="drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] left-20 top-40 h-[0px] sm:h-[370px] xl:h-[450px] absolute"
          src={red_deco}
        />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        >
          <Tilt
            gyroscope={true}
            transitionSpeed={300}
            trackOnWindow
            tiltReverse
            perspective={1000}
          >
            <motion.div
              className="bg-white xl:rotate-6 m-1 sm:m-8 mb-8 rounded-md sm:rounded-lg border-black border-4 w-fit h-fit px-5 sm:px-7 pt-7 sm:pb-8 pb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                alt="Polaroid picture of Me"
                src={picture}
                width="320"
                height="320"
                className="max-w-full rounded-md sm:rounded-lg h-auto border-black border-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              />
              <motion.p 
                className="font-Special-Elite text-center mt-3 sm:mt-6 text-2xl xl:text-4xl sm:text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Front-end Dev
              </motion.p>
            </motion.div>
          </Tilt>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Introducrion;