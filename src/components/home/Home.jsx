import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from 'react';
import { getDataAction } from './actionsHome'
import './home.style.scss';

const Home = () => {
  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='sectionHome-container'>
      {
        storeData?.loading
          ? <h1>Loading...</h1>
          : <Fragment>
            <h1>Dup-K Synthesizer</h1>
            <div>{storeData.hello}</div>
            {storeData?.data && <p>{storeData?.data.name} </p>}
          </Fragment>
      }
    </section>
  );
}

export default Home;
