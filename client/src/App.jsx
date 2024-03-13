import { BrowserRouter , Routes , Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Dashboard} from "./pages/Dashboard";
import {Projects} from "./pages/Projects";
import Nav from "./components/Nav";
function App() {
 return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
