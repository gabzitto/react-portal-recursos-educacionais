import axios from "axios";

const APIURL = "https://api.portalmec.c3sl.ufpr.br/v1/learning_objects";

/*
async function getRED(numItems) {
    var respData={};


    fetch('https://api.portalmec.c3sl.ufpr.br/v1/learning_objects')
    .then((response) => response.json())
    .then((data) => respData = data);

    for (let index = 12; index < numItems; index++) {
        respData[index] = respData[Math.floor(Math.random() * 11)];  
    }

    //console.log(respData);
    return respData;

}*/


const getTodoItems = async () => {
  try {
    const response = await axios.get(APIURL);

    const todoItems = response.data;

    for (let index = 12; index < 50; index++) {
      //setDatas([...datas, datas[Math.floor(Math.random() * 11)]]);
      todoItems.push(todoItems[Math.floor(Math.random() * 11)]);
    }

    //console.log(todoItems);

    return todoItems;
  } catch (errors) {
    console.error(errors);
    return;
  }
};


export default getTodoItems;