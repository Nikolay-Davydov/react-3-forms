import { useState } from 'react'
import Hex2rgb from './components/Hex2rgb'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Hex2rgb />
      </div>
    </>    
  );
}

export default App
