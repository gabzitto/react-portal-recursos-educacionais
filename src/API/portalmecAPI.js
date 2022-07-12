const APIURL = "https://api.portalmec.c3sl.ufpr.br/v1/learning_objects";


async function getRED(numItems) {
    var respData={};

    const resp = await fetch(APIURL);
    respData = await resp.json();

    for (let index = 12; index < numItems; index++) {
        respData[index] = respData[Math.floor(Math.random() * 11)];  
    }

    //console.log(respData);
    return respData;

}

export default {
    test: async () => {
        return await getRED(50);
    }
}

/*
export default async function getRED(numItems) {
    var respData={};

    const resp = await fetch(APIURL);
    respData = await resp.json();

    for (let index = 12; index < numItems; index++) {
        respData[index] = respData[Math.floor(Math.random() * 11)];  
    }

    //console.log(respData);
    return respData;

}*/