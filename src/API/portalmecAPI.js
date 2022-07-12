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
async function getRED() { 
    const response = await axios.get({
      URL: 'https://api.portalmec.c3sl.ufpr.br/v1/learning_objects'
    })
    const items = response.data;
    this.setState({
    isLoaded: false,
    items: items,
  });
  }


export default getRED;