import { useDispatch, useSelector } from "react-redux";
import OSC1 from '../../UI Library/osc1/OSC1';

import './dragArea.style.scss';

const DragArea = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { components } = storeData;



  return (
    < div className='container-dragArea'>

    {components.map((item)=> item)}


    </div >
  );
}

export default DragArea;