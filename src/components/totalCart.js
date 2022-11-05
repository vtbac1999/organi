import callAPI from "../utils/apiCaller";
import {useEffect, useState} from 'react'
function Totalcart(props) {
    const user = sessionStorage.getItem('name')
    const [link, setLink]=useState()
    if(!link){

        setLink('#')
    }
    useEffect(()=>{
       
        callAPI('pay','POST',{user:user})
        .then(res=>{
            
            setLink(res.data.link)

        })
    },[])
   
    const handleSubmit=(e)=>{
       
    
        
    }
    console.log(link)
    return ( 
        <>
            <div className="col-lg-6">
                    <div className="shoping__continue">
                        <div className="shoping__discount">
                            <h5>Discount Codes</h5>
                            <form action="#">
                                <input type="text" placeholder="Enter your coupon code"/>
                                <button type="submit" className="site-btn">APPLY COUPON</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="shoping__checkout">
                        <h5>Cart Total</h5>
                        <ul>
                            
                            <li>Subtotal <span>{props.s.current}.000VND</span></li>
                            <li>Total <span>{props.s.current}.000VND</span></li>
                        </ul>
                        <a href={link} className="primary-btn" onClick={e=>handleSubmit(e)}>PROCEED TO CHECKOUT</a>
                    </div>
                </div>
        </>
     );
}

export default Totalcart;