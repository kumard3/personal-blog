import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ name, href }) => {
  return (
    <Link href={href}>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="li border rounded-xl px-6 py-4 w-full"
      >
        {/* <div className="icon-placeholder" style={style} /> */}
        {name}
      </motion.li>
    </Link>
  );
};
