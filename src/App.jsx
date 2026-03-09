import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import Html from "./Html.jsx";
import Css from "./Css.jsx";
import Maths from "./Maths.jsx";
import De from "./De.jsx";
import Os from "./Os.jsx";
import Dstc from "./Dstc.jsx";
import Dbms from "./Dbms.jsx";
import Se from "./Se.jsx";
import Wt from "./Wt.jsx";
import Comp from "./Comp.jsx";
import Java from "./Java.jsx";
import Cncs from "./Cncs.jsx";
import Ime from "./Ime.jsx";
import Bdcc from "./Bdcc.jsx";
import Android from "./Android.jsx";
import Iot from "./Iot.jsx";
import Python from "./Python.jsx";
function App(){
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Home />}/>
      <Route path = "/html" element ={<Html />}/>
      <Route path ="/Css" element  ={<Css />}/>
      <Route path ="/Maths" element ={<Maths/>}/>
      <Route path ="/De" element = {<De/>}/>
      <Route path ="/Os" element = {<Os/>}/>
      <Route path ="/Dstc" element = {<Dstc/>}/>
      <Route path ="/Dbms" element = {<Dbms/>}/>
      <Route path ="/Se" element = {<Se/>}/>
      <Route path ="/Wt" element = {<Wt/>}/>
      <Route path ="/Comp" element = {<Comp/>}/>
      <Route path ="/Java" element = {<Java/>}/>  
      <Route path ="/Cncs" element = {<Cncs/>}/>
      <Route path ="/Ime" element = {<Ime/>}/>
      <Route path ="/Bdcc" element = {<Bdcc/>}/>
      <Route path ="/Android" element = {<Android/>}/>
      <Route path ="/Iot" element = {<Iot/>}/>
      <Route path ="/Python" element = {<Python/>}/>



                                               


    
    
             
      </Routes>
  </BrowserRouter>

  </>);

}
export default App;