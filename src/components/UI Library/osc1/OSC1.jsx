import { motion } from "framer-motion"

import './osc1.style.scss';

const OSC1 = ({ contraints }) => {
  return (
    <motion.div
      drag
      className='container-osc1'
      dragConstraints={contraints}
      dragElastic={false}
    >
      this is the osc 1
    </motion.div>
  );
}

export default OSC1;