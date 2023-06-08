import LoadingBar from 'react-top-loading-bar'
import './App.css';
import { BrowserRouter,
  Routes,
 Route, 
} from "react-router-dom";
import Navbar from './component/Navbar'
import Gallery from './component/Gallery';

import { useState } from 'react';
// import Uppernavbar from './component/Uppernavbar';


const App =()=>{

  let ApiKey= process.env.REACT_APP_IMAGE_API_URL;

  const [progress, setprogress] = useState(0)

  return (
    <>
    <BrowserRouter>
    {/* <Uppernavbar/> */}
    <Navbar/>
    <LoadingBar height={3} color='#f11946' progress={progress}/>

    
    <Routes>
    <Route path="/" element={<Gallery apikey={ApiKey} key="wallpaper" setprogress={setprogress} category="wallpapers" />}/>
    <Route path="/3d-renders" element={<Gallery apikey={ApiKey} key="3d-renders" setprogress={setprogress} category="3d-renders" />}/>
    <Route path="/Travel" element={<Gallery apikey={ApiKey} key="travel" setprogress={setprogress} category="travel" />}/>
    <Route path="/nature" element={<Gallery apikey={ApiKey} key="nature" setprogress={setprogress} category="nature" />}/>
    <Route path="/street-photography" element={<Gallery apikey={ApiKey} key="street" setprogress={setprogress} category="street-photography" />}/>
    <Route path="/experimental" element={<Gallery apikey={ApiKey} key="experimental" setprogress={setprogress} category="experimental" />}/>
    <Route path="/textures-patterns" element={<Gallery apikey={ApiKey} key="textures" setprogress={setprogress} category="textures-patterns" />}/>
    <Route path="/animals" element={<Gallery apikey={ApiKey} key="animals" setprogress={setprogress} category="animals" />}/>
    <Route path="/architecture-interior" element={<Gallery apikey={ApiKey} key="architecture" setprogress={setprogress} category="architecture-interior" />}/>
    <Route path="/fashion-beauty" element={<Gallery apikey={ApiKey} setprogress={setprogress} key="fashion" category="fashion-beauty" />}/>
    <Route path="/film" element={<Gallery apikey={ApiKey} setprogress={setprogress} key="film" category="film" />}/>
    <Route path="/food-drink" element={<Gallery apikey={ApiKey} setprogress={setprogress} key="food" category="food-drink" />}/>
    <Route path="/people" element={<Gallery apikey={ApiKey} setprogress={setprogress} key="people" category="people" />}/>
    <Route path="/spirituality" element={<Gallery apikey={ApiKey} setprogress={setprogress} category="spirituality" />}/>
    <Route path="/business-work" element={<Gallery apikey={ApiKey} setprogress={setprogress} category="business-work" />}/>
    <Route path="/athletics" element={<Gallery apikey={ApiKey} setprogress={setprogress} category="athletics" />}/>
    <Route path="/health" element={<Gallery apikey={ApiKey} setprogress={setprogress} category="health" />}/>
    <Route path="/current-events" element={<Gallery apikey={ApiKey} setprogress={setprogress} category="current-events" />}/>
    <Route path="/arts-culture" element={<Gallery apikey={ApiKey} setprogress={setprogress} category="arts-culture" />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
