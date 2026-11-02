import { useEffect, useState } from 'react'
import Form from './components/Form.jsx'
import PreviewCV from './components/PreviewCV.jsx'
import './styels/App.css'

function App() {

  return (
    <div className='flex_layout'>
      <Form />
      <PreviewCV />
    </div>
  )

}

export default App
