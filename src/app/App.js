import React, { useState, useEffect } from 'react';
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Mybuttonone } from "./Mybuttonone";
import { Mybuttontwo } from "./Mybuttontwo";
import { Mybuttontree } from "./Mybuttontree";
import { Chat } from "./Chat";

export function App() {
      
    const [value, setValue]= useState('first');
      
    const example = (val) => {
          setValue(val);
    };

    if (value=='first'){
        return (
            <div>
                {/* <SignUp/> */}
                <SignIn example={example}/>
                {/* <Mybuttonone example={example}/> */}
            </div>
        );
    }
    if (value=='second'){
        return (
            <div>
            <SignUp example={example}/> 
            {/* <SignIn/> */}
            {/* <Mybuttontwo example={example}/> */}
            </div>
        )       
    }
    if (value=='third'){
        return (
            <div>
            {/* <SignUp/> */}
            {/* <SignIn/> */}
            {/* <Mybuttontree example={example}/> */}
            <Chat/>
            </div>
        )       
    }
}
export default App;

