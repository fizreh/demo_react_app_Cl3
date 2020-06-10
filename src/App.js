import React from 'react';
import './App.css';

function App({name,age}) {
return <div>Hello from App.js updated {name} Age = {age-10}
<br/>
<Hello firstName={name}></Hello>
</div>
  
}

export default App;
