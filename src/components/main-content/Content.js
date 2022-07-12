import React from 'react'
import './Content.css';

import {useEffect, useState} from 'react';

const Content = ({apiData}) => {

  return (
    <section>
        <ul>
          {apiData != undefined &&
            <li>...</li>
          }
        </ul>
    </section>
  )
}

export default Content