import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [state, setState] = useState({
    progress : 20
  });
  const [category , setCategory] = useState()

  const setProgress= (progress)=>{
    setState({progress : progress})
  };
 
  return (<>
    <Router>
      <Navbar setCategory = {setCategory} />
      <LoadingBar
        color='#f11946'
        shadow = {true}
        progress={state.progress}
      />
      <Routes>
        <Route exact path="/" element={<Body setProgress = {setProgress} key="random"/>}> </Route>
        <Route exact path="/business" element={<Body setProgress = {setProgress} key="business" category={"business"} />}> </Route>
        <Route exact path="/entertainment" element={<Body setProgress = {setProgress} key="entertainment" category={"entertainment"} />}> </Route>
        <Route exact path="/general " element={<Body setProgress = {setProgress} key="general" category={"general"} />}> </Route>
        <Route exact path="/health" element={<Body setProgress = {setProgress} key="health" category={"health"} />}> </Route>
        <Route exact path="/science" element={<Body setProgress = {setProgress} key="science" category={"science"} />}> </Route>
        <Route exact path="/sports" element={<Body setProgress = {setProgress}  key="sports" category={"sports"} />}> </Route>
        <Route exact path="/technology" element={<Body setProgress = {setProgress} key="technology" category={"technology"} />}> </Route>
      </Routes>
    </Router>
    </>
  );
};
export default App;







