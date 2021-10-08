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

  const { components, selectorUser: { selectOne, selectTwo } } = storeData;

  function componentConstructor(audioNode, input) {
    dispatch(pushComponent(<div
      key={audioNode.props.id}
    >
      {audioNode}
    </div>));
    dispatch(getInput({ selectOne: input }));
  }

  useEffect(() => {

    if (selectOne === 'OSC1') {
      componentConstructor(
        <OSC1 contraints={constraintsRef} id={uuidv4()} />,
        "Select a source")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectOne])

  useEffect(() => {

    if (selectTwo === 'Filter') {
      componentConstructor(
        <Filter contraints={constraintsRef} id={uuidv4()} />,
        'Select module')
    }

    if (selectTwo === 'Gain') {
      componentConstructor(
        <Gain contraints={constraintsRef} id={uuidv4()} />,
        'Select module')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectTwo])

  return (
    < div
      className='container-dragArea'
      ref={constraintsRef}
    >
      {components.map((item) => item)}
    </div >
  );
}

export default DragArea;