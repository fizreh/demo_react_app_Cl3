import React from 'react';
import './App.css';
import './Hello.css'

/*const hello = ({name})=> "Hello World" + name;
function hello({name}){
return "Hello World" + name;
}*/

function Hello({firstName}) {
return <p className='myname'><strong>This is Para in Hello in Tag name: {firstName}</strong></p>
