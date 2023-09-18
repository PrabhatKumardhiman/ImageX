import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [state, setState] = useState({
    progress: 20,
    category : 'general'
  });

  const setProgress = (progress) => {
    setState({ progress: progress })
  };
  return (<>
    <Navbar setState = {setState} />
    <LoadingBar
      color='#f11946'
      shadow={true}
      progress={state.progress}
    />
    <div className="alert alert-danger alert-dismissible fade show" role="alert" style={{ margin: 0 }} >
      <strong>Note:</strong> This app uses React Router so please click on any link in Nabvar to continue.
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <Body setProgress={setProgress} key="random" category = {state.category} ></Body>
  </>
  );
};
export default App;







