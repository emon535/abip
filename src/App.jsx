import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import MemberLogIn from "./pages/MemberLogIn"
import MemberSignUp from "./pages/MemberSignUp"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/memberLogIn" element={<MemberLogIn/>} />
      <Route path="/memberSignUp" element={<MemberSignUp/>} />
    </Routes>
    </>
  )
}

export default App
