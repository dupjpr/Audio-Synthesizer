import { motion } from "framer-motion";
import CloseButton from "../closeButton/CloseButton";

import './filter.style.scss';

const Filter = ({ contraints }) => {

  return (
    <motion.div
      drag
      className='container-filter'
      dragConstraints={contraints}
      dragElastic={false}
    >
      <CloseButton/>
      Pakman filter
    </motion.div>
  );
}

export default Filter;