import { motion } from "framer-motion"
import './gain.style.scss';

const Gain = ({ contraints }) => {
  return (
    <motion.div
      drag
      className='container-gain'
      dragConstraints={contraints}
      dragElastic={false}
    >
      The gain
    </motion.div>
  );
}

export default Gain;