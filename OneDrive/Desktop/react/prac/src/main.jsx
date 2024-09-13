
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import Chai from './chai.jsx'
import React from 'react';



// const  reactelement={
//   type:'a',
//   props:{
//       herf:'www.google.document',
//       target:'_blanlk'
//   },
//   children:'click me to visit google'
// }

const anotherelement = (
  <a href="https://www.google.com" target="_blank">
    Click me
  </a>
)

const reactelement=React.createElement(
  'a',
  {href:'www.google.con',target:'_blank'},
  'click me '
)
createRoot(document.getElementById('root')).render(

  <App/>

)
