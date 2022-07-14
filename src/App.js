import {useEffect, useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/main-content/Content';
import getTodoItems from './API/portalmecAPI';
import axios from "axios";

const baseURL = "https://api.portalmec.c3sl.ufpr.br/v1/learning_objects";


function App() {

  const [datas, setDatas] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(() => {
    document.title = "RED";

    getTodoItems().then((a) => {
      setDatas(a);
      setHasLoaded(true);
    });

    /*
    axios.get(baseURL).then((response) => {
      setDatas(response.data);
    });
    
    fetch('https://api.portalmec.c3sl.ufpr.br/v1/learning_objects')
    .then((response) => response.json())
    .then((data) => setDatas(data));
    */
   
  
    //console.log(datas);
    
  }, []);

  if (!hasLoaded) {
    return <p>Carregando...</p>;
  }

  //console.log(getTodoItems());


  return (
    <div className="App">
      <Header />
      {datas != undefined  && <Content apiData={datas} loading={hasLoaded} /> }
    </div>
  );
}

export default App;
