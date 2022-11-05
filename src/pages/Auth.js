import './Auth.scss'
import {useParams} from 'react-router-dom'
import Infomation from '../components/infomation';
import Donmua from '../components/donmua';
function Auth() {
    let name
    let password='*******'
    const {id} = useParams()
  
    if(id=='donmua'){
    return <Donmua/>
            }  
            if(id=='infomation'){
    return  <Infomation/>
            }}

export default Auth;