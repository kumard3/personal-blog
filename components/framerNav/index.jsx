import { useRef, useEffect,useState } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useDimensions } from "../../hooks/use-dimensions";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 261px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const FramerNav = ({ navData, scrollDirection }) => {
  // const [isOpen, toggleOpen] = useCycle(false, true);
  const [isOpen, settoggleOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const ref = useRef(null);

  
  function ToggleOpen() {
    settoggleOpen(!isOpen)
    
  }


  useOnClickOutside(containerRef,() => settoggleOpen(false));
  
  // console.log(isOpen);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="nav z-10 "
    >
      <motion.div className="background border-2 " variants={sidebar} />
      <div className={`${isOpen === true ? "":"hidden"} w-full flex items-center `} >

      <Navigation navData={navData} isOpen={isOpen} />
      </div>
      <MenuToggle toggle={ToggleOpen} />
    </motion.nav>
  );
};
