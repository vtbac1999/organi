import callAPI from "../utils/apiCaller";
import {useSearchParams} from 'react-router-dom'

function Succes() {
   
   const [params,setParams]= useSearchParams(window.location.href)
   const paymentId = params.get('paymentId')
   const PayerID= params.get('PayerID')
   console.log(paymentId)
  callAPI('succes','POST',{user:sessionStorage.getItem('name'),paymentId:paymentId,PayerID:PayerID})
  .then(res=>{
    console.log(res)
  })
    return ( 
        <>
                <div>
                    Succes!!!
                </div>
        </>
     );
}

export default Succes;