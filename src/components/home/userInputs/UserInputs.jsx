
import { useDispatch, useSelector } from "react-redux";
import InputSelect from "../../UI Library/inputSelect/InputSelect";
import { getInput } from "../actionsHome";

import './utilities.style.scss';

const UserInputs = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const {
    selectorUser: { selectOne, selectTwo },
    infoSelectsInput: { selectOne: labelOne, selectTwo: labelTwo }
  } = storeData;

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    console.log({ [name]: target.value });
    dispatch(getInput({ [name]: target.value }));
  };

  return (
    <div className='container-utilities'>

      <InputSelect
        name='selectOne'
        value={selectOne}
        event={(e) => handleChange(e)}
        firstLabel="Select a source"
        labels={labelOne}
      />

      <InputSelect
        name='selectTwo'
        value={selectTwo}
        event={(e) => handleChange(e)}
        firstLabel="Select module"
        labels={labelTwo}
      />

    </div>
  );
}

export default UserInputs;