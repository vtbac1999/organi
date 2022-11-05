function Productcart(props) {
    return ( 
        <>
        <tr>
                                    <td className="shoping__cart__item">
                                        <img src={props.image} style={{width:'100px',height:'100px'}} alt=""/>
                                        <h5>{props.name}</h5>
                                    </td>
                                    <td className="shoping__cart__price">
                                       {props.price}.000
                                    </td>
                                    <td className="shoping__cart__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input className="cout" type="text" value={props.amount}/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shoping__cart__total">
                                       {props.price *props.amount}.000
                                    </td>
                                    <td className="shoping__cart__item__close">
                                        <span className="icon_close"></span>
                                    </td>
                                </tr>
        </>
     );
}

export default Productcart;