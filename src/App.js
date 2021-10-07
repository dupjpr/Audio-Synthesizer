import { Provider } from "react-redux";
import Home from "./components/home/Home";
import store from './redux/store/store';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import './utilities/Normalize.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
}

export default App;
