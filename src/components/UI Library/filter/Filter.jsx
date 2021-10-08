import { motion } from "framer-motion";
import CloseButton from "../closeButton/CloseButton";
import { v4 as uuidv4 } from 'uuid';

import './filter.style.scss';

const Filter = ({ contraints, id }) => {

  return (
    <motion.div
      drag
      className='container-filter'
      dragConstraints={contraints}
      dragElastic={false}
      key={uuidv4()}
    >
      <CloseButton id={id}/>
      Pakman filter
    </motion.div>
  );
}

export default Filter;