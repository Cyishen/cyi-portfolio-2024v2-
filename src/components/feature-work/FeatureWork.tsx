"use client"

import { motion, useInView } from "framer-motion"
import Wrapper from "../Wrapper"

import FeatureSticky from "./FeatureSticky"
import { textVariants } from "../hero/Hero"
import { useRef } from "react";

const FeatureWork = () => {
  const jumpRef = useRef(null);
  const isInView = useInView(jumpRef, { once: false })

  return (
    <div className="flex flex-col w-full md:pt-32 bg-gray-50">
      <Wrapper className="py-20">
        <motion.div className="flex flex-col items-center w-full"
          variants={textVariants}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          ref={jumpRef}
        >
          <motion.h2 variants={textVariants} className="font-extrabold text-3xl md:text-5xl py-2"
          >
            Feature Work
          </motion.h2>

          <motion.p variants={textVariants} className="text-sm text-center mt-4 px-4"
          >
            Building Web and Mobile applications, with amazing user experiences and function
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 m-5">
          </div>
        </motion.div>
      </Wrapper>

      <FeatureSticky />
    </div>
  )
}

export default FeatureWork