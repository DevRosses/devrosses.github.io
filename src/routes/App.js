import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from "../containers/Home";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Layout from "../components/Layout";
import Contact from '../components/Contact'

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/skill" element={<Skill />}></Route>
            <Route exact path="/project" element={<Project />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
