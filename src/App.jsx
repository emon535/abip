import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import MemberLogIn from "./pages/MemberLogIn"
import MemberSignUp from "./pages/MemberSignUp"
import IsLogIn from "./components/IsLogIn"
import MemberDashboard from "./pages/MemberDashboard"
import AdminLogIn from "./pages/AdminLogIn"
import AdminDashboard from "./pages/AdminDashboard"
import Member from "./pages/Member"
import ViewMember from "./pages/ViewMember"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/memberLogIn" element={<MemberLogIn/>} />
      <Route path="/memberSignUp" element={<MemberSignUp/>} />

      <Route path="/admin" element={<AdminLogIn/>} />


      <Route path="/"  element={<IsLogIn user="Member" />}>
        <Route path="/dashboard" element={<MemberDashboard/>} />
      </Route>

      <Route path="/"  element={<IsLogIn user="Admin" />}>
        <Route path="/adminDashboard" element={<AdminDashboard/>} />
        <Route path="/members" element={<Member/>} />
        <Route path="/member/:id" element={<ViewMember/>} />
      </Route>

    </Routes>
    </>
  )
}

export default App
