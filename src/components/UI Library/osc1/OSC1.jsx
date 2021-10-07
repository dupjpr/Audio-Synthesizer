import { motion } from "framer-motion"
import CloseButton from "../closeButton/CloseButton";
import { v4 as uuidv4 } from 'uuid';

import './osc1.style.scss';

const OSC1 = ({ contraints }) => {
  return (
    <motion.div
      drag
      className='container-osc1'
      dragConstraints={contraints}
      dragElastic={false}
      key={uuidv4()}
    >
      <CloseButton/>
      this is the osc 1
    </motion.div>
  );
}

export default OSC1;