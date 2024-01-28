import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/mackbook.jpg";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};
const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.5,
    },
  },
};

const laptop = {
  initial: { y: 0, scale: 3 },
  animate: {
    y: 20,
    rotate: -25,
    scale: 1,

    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="h-screen pt-12 grid lg:grid-cols-2 grid-cols-1  place-content-center">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't Worry,</span>
            <br />
            <span className="text-dark-gray">We will Fix it.</span>
          </motion.h1>
          <motion.p
            className="max-w-[50ch] mt-10 mb-5 test-lg"
            variants={introChildren}
          >
            Welcome to <span className="text-xl text-dark-gray">iRepair</span>
            ,your one-stop place for all kinds of Macbook repairs
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-3/4 lg:w-full mx-auto mb-10"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img className="object-contain mt-20 lg:mt-5" src={macbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
