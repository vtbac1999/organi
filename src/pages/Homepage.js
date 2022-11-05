import callAPI from "../utils/apiCaller";
import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import banner1 from '../asset/banner-1.jpg'
import banner2 from '../asset/banner-2.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Productlist from "../components/productlist";
function Homepage() {
   
    const [names, setNames] = useState([])
    
    useEffect(()=>{
       
        callAPI('home','GET',null)
        .then (res =>{
            setNames(res.data.sanphams)
        })
    },[names])
   
    const Cart = (e)=>{
        if(sessionStorage.getItem('name')){
            alert('Đã thêm sản phẩm vào giỏ hàng')   
      e.preventDefault()
       callAPI('cart','POST',{
        name:names[e.target.accessKey].name,
        image:names[e.target.accessKey].image,
        price:names[e.target.accessKey].price,
        user: sessionStorage.getItem('name'),
        amount:1
    })
            .then (res =>{
            
                })}
                else{
                    alert('Bạn phải đăng nhập mới có thể thêm sản phẩm vào giỏ hàng')
                }
    }
    return (
      <>
      <section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="hero__categories">
                        <div className="hero__categories__all">
                            <i className="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul>
                            <li><a href="#">Fresh Meat</a></li>
                            <li><a href="#">Vegetables</a></li>
                            <li><a href="#">Fruit & Nut Gifts</a></li>
                            <li><a href="#">Fresh Berries</a></li>
                            <li><a href="#">Ocean Foods</a></li>
                            <li><a href="#">Butter & Eggs</a></li>
                            <li><a href="#">Fastfood</a></li>
                            <li><a href="#">Fresh Onion</a></li>
                            <li><a href="#">Papayaya & Crisps</a></li>
                            <li><a href="#">Oatmeal</a></li>
                            <li><a href="#">Fresh Bananas</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="#">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?"/>
                                <button type="submit" className="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    <div className='banner'>
                    <div className="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                        <div className="hero__text">
                            <span>FRUIT FRESH</span>
                            <h2>Vegetable <br />100% Organic</h2>
                            <p>Free Pickup and Delivery Available</p>
                            <a href="#" className="primary-btn">SHOP NOW</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="featured spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".oranges">Oranges</li>
                            <li data-filter=".fresh-meat">Fresh Meat</li>
                            <li data-filter=".vegetables">Vegetables</li>
                            <li data-filter=".fastfood">Fastfood</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul >
           
                {names.map((item,index)=>
                   <li key={index} id='list'>
                        <Productlist name={item.name} 
                        image={item.image} 
                        price ={item.price} 
                        index={index} 
                        Cart={e=>Cart(e)}
                        id={item._id}/>
                </li>
                )}
            </ul>
        </div>
        <div className="col-lg-12">
                            <div className="product__pagination blog__pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
    </section>
 
    <div className="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        <img src={banner1} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        <img src={banner2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>
    );
  }
  
  export default Homepage; 