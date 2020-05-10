import NewsSource from "../model/NewsSource";

const AddNewsSourceService = async (newsSrcData:any) =>{
    console.log("news data in AddNewsSourceService :: "+JSON.stringify(newsSrcData));
    let url = 'http://localhost:8091/NewsSourceService/api/v1/newssource';
    const addNewsSrcResponse = await fetch(url,{
        method:'POST',
        body:JSON.stringify(newsSrcData),
        headers : {
        'Content-Type': "application/json",
        'Access-Control-Allow-Headers':"*",
        'Access-Control-Allow-Credentials':"true",
        'Authorization':"Bearer "+localStorage.getItem('token'),
        },
    })
    return addNewsSrcResponse;

}

export default AddNewsSourceService;
