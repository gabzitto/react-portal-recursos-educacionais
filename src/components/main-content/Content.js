import React from 'react'
import './Content.css';

//import {useEffect, useState} from 'react';

const Content = ({apiData}) => {

  console.log(apiData.length);
 
  return (
    <div class="container">
      <main>
          <ul className="listaItems">
          {apiData.map((element, key) => (
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

      <div class="pagination">
        <ul>
            <li class="page_id" id="selected-page">1</li>
            <li class="page_id" >2</li>
            <li class="page_id" >3</li>
            <li class="page_id" >4</li>
        </ul>
      </div>

    </div>
  )
}

export default Content