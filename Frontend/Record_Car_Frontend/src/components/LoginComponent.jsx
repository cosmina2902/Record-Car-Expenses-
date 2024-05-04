import React, { useState } from 'react'
import '../css/login.css'
import { useNavigate } from 'react-router-dom'
import { saveLoggedInUser } from '../service/AuthSerive';
import Alert from 'react-bootstrap/Alert';


const LoginComponent = () => {
    const navigator = useNavigate();
    const [username, setUsername]= useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
function goToHomePage(e){
    e.preventDefault();

    if(username ==='cosmina' && password ==='password'){
        saveLoggedInUser(username);
    
        navigator('/home')
    }
    else{
        setError('Invalid credentials');
    }

    
   
}

  return (
    <div class="container-fluid ps-md-0">
        <div class="row g-0">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image">
            <div className='container container-img'>
            <img src='https://www.searchenginejournal.com/wp-content/uploads/2020/02/c67d31ea-9900-4627-bad6-948dfc091060-5e431be45447e.jpeg' alt="Imaginea" className="img-fluid" />
            </div>
        </div>
        <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
                <div class="container">
                    <div class="row">
                   
                        <div class="col-md-9 col-lg-8 mx-auto">
                        {error && <Alert key='danger' variant='danger'>{error}</Alert>} 
                            <h3 class="login-heading mb-4">Welcome back!</h3>
                            <form>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" 
                  placeholder="name@example.com" value={username} name='username'
                  onChange={(e) => setUsername(e.target.value)}/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                  value={password} name='password' onChange={(e)=>setPassword(e.target.value)}/>
                  <label for="floatingPassword">Password</label>
                </div>


                <div class="d-grid">
                  <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit" onClick={(e) => goToHomePage(e)}>Sign in</button>
                  <div class="text-center">
                    <a class="small" href="#">Forgot password?</a>
                  </div>
                </div>

              </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LoginComponent