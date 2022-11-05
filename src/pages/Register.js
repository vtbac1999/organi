import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import callAPI from '../utils/apiCaller'
import{useState} from 'react'
function Register() {
	const[name, setName]=useState()
	const[password,setPassword]=useState()
	const[confirmpassword,setConfirmpassword]=useState()
	const handleSubmit=(e)=>{
		e.preventDefault()
		callAPI('register','POST',{name:name,password:password})
		.then(res=>{
			if(res.data.succes===true)
			alert('Register succes !!!')
			else
			console.log('Register fail !!!')
		})
	}
    return ( 
        <>
        <div className='Login'>
            <div className='Login-inner'>
                <h2> Register</h2>
			<Form className='my-4' onSubmit=''>	
				<Form.Group>
					<Form.Control
						type='text'
						placeholder='name'
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
				<Form.Group>
					<Form.Control
						type='password'
						placeholder='Confirm Password'
						name='password'
						required
						value={confirmpassword}
						onChange={e=>setConfirmpassword(e.target.value)}
					/>
				</Form.Group>
				<br/>
				<Button variant='success' type='submit' onClick={e=>handleSubmit(e)}>
				Register
				</Button>
			</Form>
			<p>
				Do have an account?
				<Link to='/login'>
					<Button variant='info' size='sm' className='ml-2'>
						Login
					</Button>
				</Link>
			</p>
            </div>
            </div>
		</>
     );
}

export default Register;