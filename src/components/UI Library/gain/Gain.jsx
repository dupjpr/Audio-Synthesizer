import { motion } from "framer-motion"
import CloseButton from "../closeButton/CloseButton";
import { v4 as uuidv4 } from 'uuid';

import './gain.style.scss';

const Gain = ({ contraints }) => {
  return (
    <motion.div
      drag
      className='container-gain'
      dragConstraints={contraints}
      dragElastic={false}
      key={uuidv4()}
    >
      <CloseButton/>
      The gain
    </motion.div>
  );
}

export default Gain;