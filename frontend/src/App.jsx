import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Submission from "./pages/Submission";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp"
import "./App.css"
import ProblemDesc from "./pages/ProblemDesc";
import ParticularSubmission from "./pages/ParticularSubmission";
import ProblemAdd from "./pages/ProblemAdd";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>

      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="submission"  element={<Submission/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="submission/:id"  element={<ParticularSubmission/>}/>
        <Route path="/problem/:id" element={<ProblemDesc/>} />
      </Route>
      {/* <Route path="/problem/:id" element={<ProblemDesc/>} /> */}
      <Route path="/addproblem" element={<ProblemAdd/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
