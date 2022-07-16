import React from 'react'
import './Content.css';

import {useEffect, useState} from 'react';

const Content = ({apiData}) => {

  //console.log(apiData.length);

  const number_items_in_one_page = 5;
  const [pageOn, setPageOn] = useState(0);

  const handlePageSelect = (e) => {
    document.querySelectorAll(".page_id").forEach((item2, ind) => {
      if(item2.id == "selected-page") item2.removeAttribute('id');
    })

    e.target.id = "selected-page";
    setPageOn(e.target.textContent-1);
    //console.log(pageOn);
  }

  //console.log(pageOn);

  const items_page = [];

  for (let i = 0; i < Math.ceil(apiData.length/number_items_in_one_page); i++) {

    if(i === 0){ 
      items_page.push(<li key={i} onClick={handlePageSelect} id="selected-page" className="page_id" >{i+1}</li>)
    } else {
      items_page.push(<li key={i} onClick={handlePageSelect} className="page_id" >{i+1}</li>)
    }

  }

 
  return (
    <div className="container">
      <main>
          <ul className="listaItems">
          {apiData.slice(pageOn*number_items_in_one_page,pageOn*number_items_in_one_page + number_items_in_one_page).map((element, key) => (
            <li key={key}>
              <img src={`https://api.portalmec.c3sl.ufpr.br${element.thumbnail}`} alt="img"/>
              <div className="itens-div">
                  <h2>{element.name}</h2>
                  <p><span>Descrição: </span>{element.description}</p>
                  <p><span>Autor: </span>{element.author}</p>
                  <p><span>Categoria: </span>{element.subjects[0].name}</p>
                  <p><a href={element.default_attachment_location}>acesse aqui</a></p>
              </div>
            </li>
          ))}
          </ul>
      </main> 

      <div className="pagination">
        <ul>
            {items_page}
        </ul>
      </div>

    </div>
  )
}

export default Content