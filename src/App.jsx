import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import MeetingSpace from './pages/MeetingSpace'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-meeting" element={<Create />} />
        <Route path="/meeting-space/:id" element={<MeetingSpace />} />
      </Routes>
    </div>
  )
}

export default App
