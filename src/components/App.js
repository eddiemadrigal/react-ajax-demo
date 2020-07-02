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
      const xmlhttp = new XMLHttpRequest();
      const url = "../data/MyData.json";
      xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              let myObj = JSON.parse(this.responseText);
              setJsonData(myObj);
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
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
