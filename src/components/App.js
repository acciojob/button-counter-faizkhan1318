
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

  const [count, setCount] = useState(0)


  function btnClick(){
    setCount(count+1)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button onClick={btnClick}>submit</button>
    </div>
  )
}

export default App
