import callAPI from "../utils/apiCaller";
import {useState,useEffect, useRef} from 'react'
import Productcart from "../components/productcart";
import Totalcart from "../components/totalCart";
function Cart() {
    const [cart,setCart]=useState([])
   
    let s= useRef(0)
    useEffect(()=>{
       
        callAPI('showcart','POST',{name:sessionStorage.getItem('name')})
        .then (res =>{
            setCart( res.data.carts)
            for(let i=0;i<res.data.carts.length;i++){
                s.current=s.current+ res.data.carts[i].price*res.data.carts[i].amount
                console.log(s.current) 
            }
        })
    },[])
   
  
    return (  
        <section className="shoping-cart spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table>
                            <thead>                               
                            </thead>
                            <tbody>
                                <ul>
                                    {cart.map(item=>
                                    <li key={item.id} >
                                        <Productcart
                                        name={item.name} 
                                        image={item.image} 
                                        price={item.price}
                                        amount={item.amount}
                                        />
                                </li>
                                )}
                                </ul> 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__btns">
                        <a href="#" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                        <a href="#" className="primary-btn cart-btn cart-btn-right">
                            <span className="icon_loading"></span>
                            Upadate Cart</a>
                    </div>
                </div>
                <Totalcart
                    s={s}
                />
            </div>
        </div>
    </section>
    );
}

export default Cart;