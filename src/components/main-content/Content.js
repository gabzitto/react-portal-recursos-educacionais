import React from 'react'
import './Content.css';

import {useEffect, useState} from 'react';

const Content = ({apiData}) => {
  
  const number_items_API = 50;
  
  const [hasLoaded, setHasLoaded] = useState(false);

  console.log(apiData);

  /*
  useEffect(() => {
    
    if(!hasLoaded && apiData.length < number_items_API){
      for (let index = 12; index < number_items_API; index++) {
        //setDatas([...datas, datas[Math.floor(Math.random() * 11)]]);
        apiData.push(apiData[Math.floor(Math.random() * 11)]);
      }
      //console.log(apiData);
      if(apiData.length >= number_items_API) setHasLoaded(true);
      
    }
  }, []);
  */
 
  return (
    hasLoaded ? <main>
        <ul className="listaItems">
        {apiData.map((element, key) => (
          <li key={key}>
            <img src="https://api.portalmec.c3sl.ufpr.br{element.thumbnail}" alt="img"/>
            <div className="itens-div">
                <h2>{element.name}</h2>
                <p><span>Descrição: </span>{element.description}</p>
                <p><span>Autor: </span>{element.author}</p>
                <p><span>Categoria: </span>{element.subjects[0].name}</p>
                <p><a href="{element.default_attachment_location}">acesse aqui</a></p>
            </div>
          </li>
        ))}
        </ul>
    </main> : <h1>loading</h1>
  )
}

export default Content