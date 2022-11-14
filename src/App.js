import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { increaseCounter, decreaseCounter } from './action/actions';
import store from './redux/store';
import { useSelector, useDispatch } from 'react-redux';

function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector((state) => state.counter.count);

  // event handler
  const handleIncrease = () => {
    // dispatch actions
    // props.increaseCounter();
    dispatch(increaseCounter());
  };

  const handleDecrease = () => {
    // dispatch actions
    // props.increaseCounter();
    dispatch(decreaseCounter());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and Eric!</h1>
        <div>Count: {newCount}</div>

        <button onClick={() => handleIncrease()}>Increase Count</button>

        <button onClick={() => handleDecrease()}>Decrease Count</button>
      </header>
    </div>
  );
}

// map state (redux store) -> props react
// const mapStateToProps = (state) => {
//   return {
//     countInRedux: state.counter.count,
//     abc: state.counter.name,
//   };
// };

// map dispatch (redux) -> props react
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
