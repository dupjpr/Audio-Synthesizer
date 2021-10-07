import { motion } from "framer-motion";

import './filter.style.scss';

const Filter = ({ contraints }) => {
  return (
    <motion.div
      drag
      className='container-filter'
      dragConstraints={contraints}
      dragElastic={false}
    >
      Pakman filter
    </motion.div>
  );
}

export default Filter;