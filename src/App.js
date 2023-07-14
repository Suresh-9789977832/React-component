
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {

  let [result,setResult]=useState([
    {
      name:"suresh",
      photo:<img src='./Images/pic.jpg'/> ,
      email:"sanddy@gmail.com",
      mobile:"9789977832",
      address:"No:10/a, Kamarajar Salai Chennai",
      batch:"B46WET"
    },
    {
      name:"Raj",
      photo:<img src='./Images/pic.jpg'/>,
      email:"raj@gmail.com",
      mobile:"6165465465",
      address:"No:152/a, R.V.Nagar  Chennai",
      batch:"B48WEE"
    },    {
      name:"Sam",
      photo:<img src='./Images/pic.jpg'/>,
      email:"Sam@gmail.com",
      mobile:"545454216",
      address:"No:152/a, Kannagi salai Chennai",
      batch:"B48WEE"
    }
  ])

  return<>
 
      <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
              <Dashboard result={result}/>
         </div>
         </div>
         </div>
  </>  

}

export default App;
