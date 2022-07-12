import './App.css';
import Header from './components/header/Header';
import Content from './components/main-content/Content';
import getRED from './API/portalmecAPI';

import {useEffect, useState} from 'react';

function App() {

  const [githubData, setGithubData] = useState([])
  const [githubUser, setGithubUser] = useState("gabzitto")

  const number_items_API = 50;
  //let jsonCopy = await getRED.test();
  //console.log(jsonCopy);

  //console.log(getRED(50));

  useEffect(() => {
    document.title = "RED";

    fetch('https://api.portalmec.c3sl.ufpr.br/v1/learning_objects')
    .then((response) => response.json())
    .then((data) => setGithubData(data));

    console.log(githubData);
  }, []);

  return (
    <div className="App">
      <Header />
      <Content apiData={githubData}  />
    </div>
  );
}

export default App;
