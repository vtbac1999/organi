import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import{useState} from 'react'
import callAPI from '../utils/apiCaller'
import { useNavigate } from 'react-router-dom'
import AlertMessage from '../components/AlertMessage'
function Login() {
	const[name, setName]=useState()
	const[password,setPassword]=useState()
	const navigate = useNavigate()
	const handleSubmit=(e)=>{
		e.preventDefault()
		callAPI('login','POST',{Username:name,Password:password})
		.then(res=>{
			if(res.data.succes=== true)
			sessionStorage.setItem('name', name);
		
			navigate('/')
		})
	}
    return ( 
        <>
        <div className='Login'>
            <div className='Login-inner'>
                <h2> Login</h2>
			<Form className='my-4' onSubmit=''>	
			<AlertMessage info={alert} />
				<Form.Group>
				
					<Form.Control
						type='text'
						placeholder='Username'
						name='username'
						required
						value={name}
						onChange={e=>setName(e.target.value)}
					/>
				</Form.Group>
                <br/>
				<Form.Group>
					<Form.Control
						type='password'
						placeholder='Password'
						name='password'
						required
						value={password}
						onChange={e=>setPassword(e.target.value)}
					/>
				</Form.Group>
                <br/>
				<Button variant='success' type='submit' onClick={e=>handleSubmit(e)}>
					Login
				</Button>
			</Form>
			<p>
				Don't have an account?
				<Link to='/register'>
					<Button variant='info' size='sm' className='ml-2'>
						Register
					</Button>
				</Link>
			</p>
            </div>
            </div>
		</>
     );
}

export default Login;