import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import Mycomponent from './components/Mycomponent';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello Phatdeptrai
        <Mycomponent></Mycomponent>
      </div>
    );
  }
}


// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (

//     <div>
//       Hello Phatdeptrai
//       <Mycomponent></Mycomponent>
//     </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Hello world - Nguyen Minh Phat
//     //     </p>
//     //     <div>Count = {count}</div>
//     //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//     //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//     //   </header>
//     // </div>
//   );
// }


export default App;
