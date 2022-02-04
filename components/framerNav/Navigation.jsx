import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({navData,isOpen}) => (
  <motion.ul variants={variants} className={`ul `}>
    {navData.map((i) => (
      <MenuItem name={i.name} href={i.href} key={i.name} />
    ))}
  </motion.ul>
);


