import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../UI Library/filter/Filter";
import Gain from "../../UI Library/gain/Gain";
import OSC1 from "../../UI Library/osc1/OSC1";
import { getInput, pushComponent } from "../actionsHome";

import './utilities.style.scss';

const UserInputs = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { selectorUser, selectorUser: { selectOne, selectTwo } } = storeData;

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    dispatch(getInput({ [name]: target.value }));
  };


  useEffect(() => {

    if (selectOne === 'OSC1') {
      dispatch(pushComponent(<OSC1 />));
      dispatch(getInput({ selectOne: "Select a source" }));
    }
    if (selectTwo === 'Filter') {
      dispatch(pushComponent(<Filter />));
      dispatch(getInput({ selectTwo: "Select module" }));
    }

    if (selectTwo === 'Gain') {
      dispatch(pushComponent(<Gain />));
      dispatch(getInput({ selectTwo: "Select module" }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectorUser])

  return (
    <div className='container-utilities'>
      <select
        value={selectOne}
        name='selectOne'
        onChange={(e) => handleChange(e)}
      >
        <option value="Select a source">Select a source</option>
        <option value="OSC1">OSC1</option>
      </select>

      <select
        value={selectTwo}
        name='selectTwo'
        onChange={(e) => handleChange(e)}
      >
        <option value="Select module">Select module</option>
        <option value="Filter">Filter</option>
        <option value="Gain">Gain</option>
      </select>

    </div>
  );
}

export default UserInputs;