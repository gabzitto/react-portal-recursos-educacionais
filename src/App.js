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

    /*
    axios.get(baseURL).then((response) => {
      setDatas(response.data);
    });
    */
      fetch('https://api.portalmec.c3sl.ufpr.br/v1/learning_objects')
      .then((response) => response.json())
      .then((data) => setDatas(data));
    /*
    if(datas != undefined){
      const number_items_API = 50;

      for (let index = 12; index < number_items_API; index++) {
        //setDatas([...datas, datas[Math.floor(Math.random() * 11)]]);
        datas.push(datas[Math.floor(Math.random() * 11)]);
      }
    }
    console.log(datas);
    */
  }, []);

  return (
    <div className="App">
      <Header />
      <Content apiData={datas}  />
    </div>
  );
}

export default App;
