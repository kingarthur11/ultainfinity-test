import React, {useState, useEffect} from 'react';
import LoginFoto from './assests/Loginfoto.png'
import styled from 'styled-components';

const Login = () => {

  const [loginUrl, setLoginUrl] = useState(null);
  useEffect(() => {
      fetch('http://localhost:8000/api/auth', {
          headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
          .then((response) => {
              if (response.ok) {
                  return response.json();
              }
              throw new Error('Something went wrong!');
          })
          .then((data) => setLoginUrl( data.url ))
          .catch((error) => console.error(error));
  }, []);

  return (
    <Wrapper>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-6 col-12 d-flex'>
            <div className='m-auto'>
              <div className=''>
                <h4>Log in</h4>
                <p className='mb-3'>Welcome back: Please enter your details</p>
                <div className="form-group mb-3">
                    <label htmlFor="">Email</label>
                    <input type="password" className="w-100" placeholder="Password" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="">Password</label>
                    <input type="password" className="w-100" placeholder="Password" />
                </div>
                <div className='d-flex align-items-center justify-content-between my-3'>
                  <p>Remember for 30 days</p>
                  <p>Forgot password</p>
                </div>
                <button className='w-100 normal-btn'>Sign in</button>
                <div className='text-center style-nav mt-3'>
                  <div>
                      {loginUrl != null && (
                          <a href={loginUrl}>Sign in with Google</a>
                      )}
                  </div>
                  <p className="d-inline-block">Already have an account?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 d-none d-sm-block d-flex'>
            <div className='m-auto'>
              <div className=' style-image'>
                <img src={LoginFoto} alt='LoginFoto' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Login


const Wrapper = styled.div`
 max-height: 100vh;
 
 .style-image {
  height: 100vh;
  width: 100%;
  padding: 50px 0 50px 50px;
  background: #F2F8F2;
  img {
    height: 100%;
  }
  .style-nav h4{
    padding: 16px;
    font-size: 8px;
    border-radius: 8px;
  }
 }
 button {
    padding: 8px 13px;
    border-radius: 8px;
  }
  .grey-btn {
    border: 2px solid #006D04;
    margin-right: 10px;
    color: #006D04;
  }
  .normal-btn {
    color: #ffffff;
    background-color: #006D04;
  }
  .style-nav h4 {
    font-size: 15px;
    padding: 8px 13px;
    border-radius: 8px;
  }
  p {
    font-size: 14px;
  }
`;