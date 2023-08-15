import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [state, setState] = useState({
    progress: 20
  });
  const [category, setCategory] = useState()

  const setProgress = (progress) => {
    setState({ progress: progress })
  };
  return (<>
    <Router>
      <Navbar />
      <LoadingBar
        color='#f11946'
        shadow={true}
        progress={state.progress}
      />
      <div className="alert alert-danger alert-dismissible fade show" role="alert" style={{margin:0}} >
        <strong>Note:</strong> This app uses React Router so please click on any link in Nabvar to continue.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <Routes>
        <Route exact path="/" element={<Body setProgress={setProgress} key="random" />}> </Route>
        <Route exact path="/business" element={<Body setProgress={setProgress} key="business" category={category?category:"business"} />}> </Route>
        <Route exact path="/entertainment" element={<Body setProgress={setProgress} key="entertainment" category={"entertainment"} />}> </Route>
        <Route exact path="/general " element={<Body setProgress={setProgress} key="general" category={"general"} />}> </Route>
        <Route exact path="/health" element={<Body setProgress={setProgress} key="health" category={"health"} />}> </Route>
        <Route exact path="/science" element={<Body setProgress={setProgress} key="science" category={"science"} />}> </Route>
        <Route exact path="/sports" element={<Body setProgress={setProgress} key="sports" category={"sports"} />}> </Route>
        <Route exact path="/technology" element={<Body setProgress={setProgress} key="technology" category={"technology"} />}> </Route>
      </Routes>
    </Router>
  </>
  );
};
export default App;







