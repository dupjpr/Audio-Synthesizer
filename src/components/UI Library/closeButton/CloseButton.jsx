import { useDispatch, useSelector } from "react-redux";
import { pushComponent } from "../../home/actionsHome";

const CloseButton = ({ id }) => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { components } = storeData;

  function handleClick(e) {
    // const newArra = components.filter((item) => item.key !== id);
    
    // dispatch(pushComponent())

    console.log('componnn.>>>',components[1].key);
    console.log('-->', id);
  };

  return (
    <button onClick={(e) => handleClick(e)}>
      X
    </button>
  );
}

export default CloseButton;