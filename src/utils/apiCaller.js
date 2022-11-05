import axios from 'axios';

function callAPI(enPoint,method,body) {
    return axios({
        method: method,
        url: `https://agile-coast-07348.herokuapp.com/${enPoint}`,
        data: body
      })
      .catch (err =>{
        console.log(err)
      })
}

export default callAPI;