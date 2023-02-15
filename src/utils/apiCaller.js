import axios from 'axios';

function callAPI(enPoint,method,body) {
    return axios({
        method: method,
        url: `sever-ogani-api1.vercel.app/${enPoint}`,
        data: body
      })
      .catch (err =>{
        console.log(err)
      })
}

export default callAPI;
