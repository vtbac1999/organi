
import '../App.css';
import logo from '../asset/logo.png'
import callAPI from '../utils/apiCaller';
import {useState, useEffect} from 'react'
function Header() {
    const [count, setCount] = useState()
    useEffect(()=>{
        callAPI('home','POST',{name:sessionStorage.getItem('name')})
        .then(res=>{ 
            setCount(res.data.count)
        })
    },[])
    
    let name =  sessionStorage.getItem('name');
    let logout='Log out'
    let login='/login'
    if (name ==null){

    name='Login'
    logout=null
    }
    else{
        login='/auth/donmua'
    }
    const handleLogout=(e)=>{
        sessionStorage.removeItem('name');
    }
  return (
    <>
    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                           
                            <div className="header__top__right__language">
                                <img src="img/language.png" alt=""/>
                                <div>English</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">Spanis</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <a href={login}><i className="fa fa-user"></i>{name} </a>
                               
                            </div>
                            <div className="header__top__right__auth">
                            <a href='' onClick={e=>handleLogout(e)}>{logout}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a href="/"><img src={logo} alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="./shop-grid.html">Shop</a></li>
                            <li><a href="#">Pages</a>
                                <ul className="header__menu__dropdown">
                                    <li><a href="./shop-details">Shop Details</a></li>
                                    <li><a href="./shoping-cart">Shoping Cart</a></li>
                                    <li><a href="./checkout">Check Out</a></li>
                                    <li><a href="./blog-details">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="./blog">Blog</a></li>
                            <li><a href="./contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="/shoping-cart"><i className="fa fa-shopping-bag"></i> <span>{count}</span></a></li>
                        </ul>
                        <div className="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>

   
    
   
   
    
    




    </>
  );
}

export default Header;
