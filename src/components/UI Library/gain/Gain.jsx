import { motion } from "framer-motion"
import CloseButton from "../closeButton/CloseButton";
import './gain.style.scss';

const Gain = ({ contraints }) => {
  return (
    <motion.div
      drag
      className='container-gain'
      dragConstraints={contraints}
      dragElastic={false}
    >
      <CloseButton/>
      The gain
    </motion.div>
  );
}

export default Gain;