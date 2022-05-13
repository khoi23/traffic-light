import { useState } from 'react';
import './App.css';

function App() {
  const [litPos, setLitPos] = useState(0);
  const handlePrev = () => {
    if (litPos === 0 ) {
      setLitPos(1)
    } else if (litPos === 1) {
      setLitPos(2)
    } else {
      setLitPos(0)
    }
  }

  const handleRed = () => {
    setLitPos(0)
  }
  const handleYellow = () => {
    setLitPos(1)
  }
  const handleGreen = () => {
    setLitPos(2)
  }
 
  return (
    <div className="App">
      <div id="traffic-light">
        <button
          style={{ backgroundColor: litPos === 0 ? 'red' : 'white' }}
          className='button-traffic'
          onClick={handleRed}
        />
        <button
          style={{ backgroundColor: litPos === 1 ? 'yellow' : 'white' }}
          className='button-traffic'
          onClick={handleYellow}

        />
        <button
          style={{ backgroundColor: litPos === 2 ? 'green' : 'white' }}
          className='button-traffic'
          onClick={handleGreen}
        />
      </div>
      <button
          style={{  cursor: 'pointer'}}
          onClick={handlePrev}
      >Prev</button>
    </div>
  );
}

export default App;
