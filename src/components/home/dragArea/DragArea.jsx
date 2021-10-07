import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushComponent, getInput } from "../actionsHome";
import { v4 as uuidv4 } from 'uuid';

import OSC1 from "../../UI Library/osc1/OSC1";
import Filter from "../../UI Library/filter/Filter";
import Gain from "../../UI Library/gain/Gain";

import './dragArea.style.scss';

const DragArea = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();
  const constraintsRef = useRef(null)

  const { components, selectorUser, selectorUser: { selectOne, selectTwo } } = storeData;

  useEffect(() => {

    if (selectOne === 'OSC1') {
      dispatch(pushComponent(<OSC1 contraints={constraintsRef} />));
      dispatch(getInput({ selectOne: "Select a source" }));
    }
    if (selectTwo === 'Filter') {
      dispatch(pushComponent(<Filter contraints={constraintsRef} />));
      dispatch(getInput({ selectTwo: "Select module" }));
    }

    if (selectTwo === 'Gain') {
      dispatch(pushComponent(<Gain contraints={constraintsRef} />));
      dispatch(getInput({ selectTwo: "Select module" }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectorUser])


  return (
    < div
      className='container-dragArea'
      ref={constraintsRef}
    >
      {components.map((item) => <div key={uuidv4()}>{item}</div>)}
    </div >
  );
}

export default DragArea;