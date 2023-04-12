import Login from "./Login";
import Register from "./Register";
import Layout from "./components/Layout";
import LinkPage from "./components/LinkPage";
import Home from "./components/Home";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Layout />}>

       <Route path="login" element={<Login />} />
       <Route path="register" element={<Register />} />
       <Route path="linkpage" element={<LinkPage />} />
      
       <Route path="/" element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;
