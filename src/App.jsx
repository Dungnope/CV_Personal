import { useEffect, useState } from 'react'
import Form from './components/Form.jsx'
import PreviewCV from './components/PreviewCV.jsx'
import './styels/App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("count change to:", count);
  }, [count])

  const counter = () => {
    setCount(count + 1);
  }

  const resetCounter = () => {
    setCount(0);
  }
  return (
    <div className='flex_layout'>
      <Form />
      <PreviewCV />
    </div>
  )

}

export default App
