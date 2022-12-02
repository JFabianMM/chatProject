import React, {useState} from "react";
import ReactDOM from "react-dom/client";
//import { Button } from "./Button";
import Button from '@mui/material/Button';
//import { Mybutton } from "./Mybutton";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

import App from './App';
//import {Login} from "./Login";

const root = ReactDOM.createRoot(document.getElementById("app"));

// ReactDOM.createRoot(document.getElementById('app')).render(
//     <>
//         <App/>
//         {/* <Counter/> */}
//     </>
    
// )
//render(<App/>, document.getElementById('app'));

root.render(
  <>
    <App/>
    {/* <Counter/> */}
    {/* <Button variant="contained">Hello World 2</Button> */}
    {/* <Mybutton/> */}
    {/* <SignIn/> */}
    {/* <SignUp/> */}

  </>
);
