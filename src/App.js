import {useEffect, useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/main-content/Content';
import api_get from './API/portalmecAPI';

function App() {

  const [datas, setDatas] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(() => {
    document.title = "RED";

    api_get(12).then((a) => {
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

  //console.log(api_get());


  return (
    <div className="App">
      <Header />
      {datas != undefined  && <Content apiData={datas} loading={hasLoaded} /> }
    </div>
  );
}

export default App;
