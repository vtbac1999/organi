import { useState } from 'react';
import {useParams} from 'react-router-dom'
import callAPI from '../utils/apiCaller';
function Shopdetail() {
    const initalState={
       price:'',
        image:'',
        price:''
    }
    const [product,setProduct]= useState(initalState)
    const slugId= useParams()
    callAPI('shopdetail','POST',{id:slugId.slugId})
    .then(res=>{
       setProduct({
        name:res.data.sanphams[0].name,
        image:res.data.sanphams[0].image,
        price:res.data.sanphams[0].price
       })
    })
    return ( 
        <>
        <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>{slugId.slugId}</h2>
                            <div className="breadcrumb__option">
                                <a href="./index.html">Home</a>
                                <a href="./index.html">Vegetables</a>
                                <span>{slugId.slugId}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <section className="product-details spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="product__details__pic">
                        <div className="product__details__pic__item">
                            <img className="product__details__pic__item--large"
                                src={product.image} alt=""/>
                        </div>
                        <div className="product__details__pic__slider owl-carousel">
                            <img data-imgbigurl="img/product/details/product-details-2.jpg"
                                src="img/product/details/thumb-1.jpg" alt=""/>
                            <img data-imgbigurl="img/product/details/product-details-3.jpg"
                                src="img/product/details/thumb-2.jpg" alt=""/>
                            <img data-imgbigurl="img/product/details/product-details-5.jpg"
                                src="img/product/details/thumb-3.jpg" alt=""/>
                            <img data-imgbigurl="img/product/details/product-details-4.jpg"
                                src="img/product/details/thumb-4.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="product__details__text">
                        <h3>{product.name}</h3>
                        <div className="product__details__rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <span>(18 reviews)</span>
                        </div>
                        <div className="product__details__price">{product.price}.000VND</div>
                        
                        <div className="product__details__quantity">
                            <div className="quantity">
                                <div className="pro-qty">
                                    <input type="text" value="1"/>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="primary-btn">ADD TO CARD</a>
                        <a href="#" className="heart-icon"><span className="icon_heart_alt"></span></a>
                        <ul>
                            <li><b>Availability</b> <span>In Stock</span></li>
                            <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                            <li><b>Weight</b> <span>0.5 kg</span></li>
                            <li><b>Share on</b>
                                <div className="share">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="product__details__tab">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                    aria-selected="true">Description</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                    aria-selected="false">Information</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                    aria-selected="false">Reviews <span>(1)</span></a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <div className="product__details__tab__desc">
                                    
                                </div>
                            </div>
                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                                <div className="product__details__tab__desc">
                                    
                                </div>
                            </div>
                            <div className="tab-pane" id="tabs-3" role="tabpanel">
                                <div className="product__details__tab__desc">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="related-product">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title related__product__title">
                        <h2>Related Product</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                            <ul className="product__item__pic__hover">
                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/product-2.jpg">
                            <ul className="product__item__pic__hover">
                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                            <ul className="product__item__pic__hover">
                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/product-7.jpg">
                            <ul className="product__item__pic__hover">
                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
     );
}

export default Shopdetail;