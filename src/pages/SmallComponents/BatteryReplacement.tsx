import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { componentRef, style } = useScrollGrow();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-400 h-[350px] rounded-2xl row-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
