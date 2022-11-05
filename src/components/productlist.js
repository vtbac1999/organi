import '../App.css';
function Productlist(props) {  
    const detail=(e)=>{
       
    }
  return (
    <>
         <div className="" >
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg">
                            <img src={props.image} />
                            <ul className="featured__item__pic__hover">
                                <li><a href="#"><i className="fa fa-shopping-cart" 
                                aria-hidden="true"  accessKey={props.index} 
                                onClick={e=>props.Cart(e)} ></i> </a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href={'/shopdetail/'+props.id} onClick={e=>detail(e)} >{props.name}</a></h6>
                            <h5>{props.price}.000VND</h5>
                        </div>
                    </div>
                </div>
    </>
  );
}

export default Productlist;
