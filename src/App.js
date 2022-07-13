import {useEffect, useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/main-content/Content';
import getRED from './API/portalmecAPI';
import axios from "axios";

const baseURL = "https://api.portalmec.c3sl.ufpr.br/v1/learning_objects";


function App() {

  const [datas, setDatas] = useState();
  
  useEffect(() => {
    document.title = "RED";

    
    axios.get(baseURL).then((response) => {
      setDatas(response.data);
    });
    /*
    fetch('https://api.portalmec.c3sl.ufpr.br/v1/learning_objects')
    .then((response) => response.json())
    .then((data) => setDatas(data));
    */
   
  
    //console.log(datas);
    
  }, []);

  return (
    <div className="App">
      <Header />
    {datas != undefined  && <Content apiData={datas}  /> }
    </div>
  );
}

export default App;
