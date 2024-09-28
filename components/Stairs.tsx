import { animate, motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

// calculate reverse index for staggering delay

const reverseIndex = (index: number) => {
  const totalSteps = 6;

  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/* renders 6motion divs, each representing a step of stairs */}

      {[...Array(6)].map((_, idx) => (
        <motion.div
          key={idx}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(idx) * 0.1,
          }}
          className="h-full w-full bg-white relative "
        ></motion.div>
      ))}
    </>
  );
};

export default Stairs;
