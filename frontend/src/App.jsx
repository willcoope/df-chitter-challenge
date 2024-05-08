import Homepage from "./components/pages/Homepage/Homepage"
import Login from "./components/pages/Login/Login"
import Signup from "./components/pages/Signup/Signup"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const user = localStorage.getItem("user");
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
