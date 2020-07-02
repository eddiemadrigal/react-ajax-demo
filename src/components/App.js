import React, {useState} from 'react';
import DefaultForm from './DefaultForm';
import Wind from './Wind';
import Solar from './Solar';

function App() {

  const [solar, setSolar] = useState(false);
  const [wind, setWind] = useState(false);
  const [showDefault, setShowDefault] = useState(true);

  
  if (showDefault) {
    return (       
      <DefaultForm setSolar={setSolar} setWind={setWind} setShowDefault={setShowDefault} />
    )        
  } else if (solar) {
    return (
      <Solar setSolar={setSolar} setWind={setWind} setShowDefault={setShowDefault} />
    )
  } else if (wind) {
    return (
      <Wind setSolar={setSolar} setWind={setWind} setShowDefault={setShowDefault} />
    )
  }
    
}

export default App;
