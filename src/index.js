import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ImagePixelated, ElementPixelated } from "react-pixelate";
// Import image you want to pixelate
import src from "./images/tomato.png";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ImagePixelated 
  src={src} 
  width={500} 
  height={300} fillTransparencyColor={"grey"} />
  <ElementPixelated pixelSize={5}>
  <div style={{ height: 200, width: 1000 }}>
    </div>
</ElementPixelated>
<App />
 </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
