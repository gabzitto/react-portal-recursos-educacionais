import React from 'react'
import './Content.css';

import {useEffect, useState} from 'react';

const Content = ({apiData}) => {
  
  const number_items_API = 50;
  
  const [hasLoaded, setHasLoaded] = useState();

  useEffect(() => {
    
    if(!hasLoaded){
      for (let index = 12; index < number_items_API; index++) {
        //setDatas([...datas, datas[Math.floor(Math.random() * 11)]]);
        apiData.push(apiData[Math.floor(Math.random() * 11)]);
      }
    }
    setHasLoaded(true);
  }, []);


  return (
    hasLoaded ? <section>
        <ul>
        {apiData.map((item, key) => (
          <li key={key}>{key}</li>
        ))}
        </ul>
    </section> : <p>loading</p>
  )
}

export default Content