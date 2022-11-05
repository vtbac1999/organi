function Infomation() {
    return ( 
        <>
             <div className="col-lg-3">
                    <div className="hero__categories">
                       
                        <ul id='auth'>
                            <li><a href="/auth/donmua">Đơn Mua</a></li>
                            <li><a href="/auth/infomation">Tài Khoản Của Tôi</a></li>
                            
                        </ul>
                    </div>
                </div>
                <form class="cf">
                    <div class="half left cf">
                        <input type="text" id="input-name" placeholder="Name"/>
                        <input type="email" id="input-email" placeholder="Email address"/>
                        <input type="text" id="input-subject" placeholder="Subject"/>
                    </div>
                    <div class="half right cf">
                        <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                    </div>  
                    <input type="submit" value="Submit" id="input-submit"/>
                </form>
        </>
     );
}

export default Infomation;