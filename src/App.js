import './App.css';
import {useContext} from 'react'
import {CounterContext} from './context/counterContext'

function App() {
  const [count, setCount] = useContext(CounterContext)
  return (
    <div className="App">
     <h1>Counter {count}</h1>
     <button onClick={()=> setCount(count +1)}>+</button>
     <button onClick={()=> setCount(count -1)}>-</button>
    </div>
  );
}

export default App;
