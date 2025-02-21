import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const App = () => {
  // Scroll-based animations for opacity and vertical position
  const { scrollYProgress, scrollY } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Scroll effect on opacity
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]); // Scroll effect on vertical position

  // Introduce a delay effect (simulating stagger) based on scroll position
  const delay = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.1, 0]); // Delay simulation for stagger

  // Add a scrub effect to the scroll position
  const scrub = useTransform(scrollY, [0, 1000], [0, 1]);

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          width: "100%",
        }}
        className="h-2 origin-left bg-red-500 fixed top-0"
      ></motion.div>

      <div className="w-full h-auto font-mono px-20 flex gap-20 items-center flex-col bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white">
        <motion.h1
          style={{
            opacity,
            y,
            transitionDelay: delay, // Apply stagger delay effect
          }}
          className="text-3xl mb-10 mt-20"
        >
          Welcome to my developer portfolio
        </motion.h1>

        <motion.p
          style={{
            opacity: scrub,
            y: useTransform(scrub, [0, 1], [100, 0]), // Scrubbing effect on scroll for paragraph
          }}
          className="text-justify"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente
          praesentium pariatur facilis quos alias! Nobis in sapiente esse? Nulla
          accusantium modi vel expedita quas reiciendis libero dicta aut dolore
          culpa, incidunt voluptatem odio hic repudiandae itaque minus beatae
          sapiente quaerat! Rem molestiae, eos nam et tempora tempore amet
          dolores ratione provident quam in, praesentium eveniet voluptatem
          repellendus commodi facilis nesciunt! Ullam molestias aliquid
          obcaecati cupiditate nobis voluptatum porro eligendi pariatur, odit
          laborum maxime vel.
        </motion.p>

        <hr className="bg-white w-full h-[1px] mt-5 mb-5" />

        <motion.p
          style={{
            opacity: scrub,
            y: useTransform(scrub, [0, 1], [100, 0]), // Scrubbing effect on scroll for paragraph
          }}
          className="text-justify"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente
          praesentium pariatur facilis quos alias! Nobis in sapiente esse? Nulla
          accusantium modi vel expedita quas reiciendis libero dicta aut dolore
          culpa, incidunt voluptatem odio hic repudiandae itaque minus beatae
          sapiente quaerat! Rem molestiae, eos nam et tempora tempore amet
          dolores ratione provident quam in, praesentium eveniet voluptatem
          repellendus commodi facilis nesciunt! Ullam molestias aliquid
          obcaecati cupiditate nobis voluptatum porro eligendi pariatur, odit
          laborum maxime vel.
        </motion.p>

        <hr className="bg-white w-full h-[1px] mt-5 mb-5" />

        <motion.p
          style={{
            opacity: scrub,
            y: useTransform(scrub, [0, 1], [100, 0]), // Scrubbing effect on scroll for paragraph
          }}
          className="text-justify"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente
          praesentium pariatur facilis quos alias! Nobis in sapiente esse? Nulla
          accusantium modi vel expedita quas reiciendis libero dicta aut dolore
          culpa, incidunt voluptatem odio hic repudiandae itaque minus beatae
          sapiente quaerat! Rem molestiae, eos nam et tempora tempore amet
          dolores ratione provident quam in, praesentium eveniet voluptatem
          repellendus commodi facilis nesciunt! Ullam molestias aliquid
          obcaecati cupiditate nobis voluptatum porro eligendi pariatur, odit
          laborum maxime vel.
        </motion.p>

        <hr className="bg-white w-full h-[1px] mt-5 mb-5" />
        
        <motion.p
          style={{
            opacity: scrub,
            y: useTransform(scrub, [0, 1], [100, 0]), // Scrubbing effect on scroll for paragraph
          }}
          className="text-justify"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente
          praesentium pariatur facilis quos alias! Nobis in sapiente esse? Nulla
          accusantium modi vel expedita quas reiciendis libero dicta aut dolore
          culpa, incidunt voluptatem odio hic repudiandae itaque minus beatae
          sapiente quaerat! Rem molestiae, eos nam et tempora tempore amet
          dolores ratione provident quam in, praesentium eveniet voluptatem
          repellendus commodi facilis nesciunt! Ullam molestias aliquid
          obcaecati cupiditate nobis voluptatum porro eligendi pariatur, odit
          laborum maxime vel.
        </motion.p>

        <hr className="bg-white w-full h-[1px] mt-5 mb-5" />
      </div>
    </>
  );
};

export default App;
