import '../App.css'
import { useState,useEffect } from 'react';
import callAPI from '../utils/apiCaller';
import Productorder from './productorder'
function Donmua() {
    const[order,setOrder]=useState([])
    
    useEffect(()=>{
       
    callAPI('order','POST',{user:sessionStorage.getItem('name')})
    .then(res=>{
    
        setOrder(res.data.orders)
       
    })
    },[])
    console.log(order)
    return ( 
        <>
        
            <div className="col-lg-12" style={{textAlign:'center'}}>
                    <nav className="header__menu">
                        <ul>
                            <li><a href="/">Tất Cả</a></li>
                            <li><a href="./shop-grid.html">Chờ Xác Nhận</a></li>
                            <li><a href="#">Chờ Lấy Hàng</a>
                            </li>
                            <li><a href="./blog">Đang Giao Hàng</a></li>
                            <li><a href="./contact">Đã Giao Hàng</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="hero__categories">
                       
                        <ul id='auth'>
                            <li><a href="/auth/donmua">Đơn Mua</a></li>
                            <li><a href="/auth/infomation">Tài Khoản Của Tôi</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table>
                            <thead>                               
                            </thead>
                            <tbody>
                            <ul >
           
                                {order.map((item,index)=>
                                    <li key={index} >
                                            <Productorder
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
        </>
     );
}

export default Donmua;