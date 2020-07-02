import React, {useState, useEffect} from 'react';
import DefaultForm from './DefaultForm';
import Wind from './Wind';
import Solar from './Solar';

function App() {

  const [solar, setSolar] = useState(false);
  const [wind, setWind] = useState(false);
  const [showDefault, setShowDefault] = useState(true);
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      fetch('../data/MyData.json')
          .then(res => res.json())
          .then(data => {
            setJsonData(data);
          })
    }
    fetchData();
  }, []);

  
  if (showDefault) {
    return (       
      <DefaultForm setSolar={setSolar} setWind={setWind} setShowDefault={setShowDefault} />
    )        
  } else if (solar) {
    return (
      <Solar setSolar={setSolar} setWind={setWind} setShowDefault={setShowDefault} jsonData={jsonData} />
    )
  } else if (wind) {
    return (
      <Wind setSolar={setSolar} setWind={setWind} setShowDefault={setShowDefault} jsonData={jsonData} />
    )
  }
    
}

export default App;
