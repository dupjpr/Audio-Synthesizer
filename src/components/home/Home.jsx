import { useDispatch, useSelector } from "react-redux";
import './home.style.scss';
import DragArea from "./dragArea/DragArea";
import Utilities from "./userInputs/UserInputs";

const Home = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { audioContext } = storeData;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  console.log(oscillator);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  console.log(storeData.components);
  
  return (
    <section className='container-sectionHome'>
      <h1 className='container-sectionHome-title'>Dup-K Synthesizer</h1>
      <Utilities />
      <DragArea />
      <button onClick={(e) =>  oscillator.start()}>play</button>
      <button onClick={(e) =>  oscillator.stop()}>stop</button>
    </section>
  );
}

export default Home;
