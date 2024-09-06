"use client"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const BackgroundAni = () => {

  useGSAP(
    () => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          markers: true,
        },
      });

      scrollTl
        .fromTo(
          ".hero",
          {
            backgroundColor: "#FDE047",
          },
          {
            backgroundColor: "#D9F99D",
            overwrite: "auto",
          },
          1,
        )
    },
  );
  return (
    <div className="hero h-[200vh]">
      BackgroundAni
    </div>
  )
}

export default BackgroundAni