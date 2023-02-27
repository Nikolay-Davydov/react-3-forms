import { useState } from 'react'
import Steps from './components/Steps';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Steps />
      </div>
    </>    
  );
}

export default App
