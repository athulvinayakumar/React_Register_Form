import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [cp, setConfirmPassword] = useState('');
  const [isname, IsSetName] = useState(true)
  const [isemail, isSetEmail] = useState(true)
  const [ispass, isSetpass] = useState(true)
  const [iscp, isSetConfirmPassword] = useState(true)

  const [error,seterror] = useState('');

  const [success,setsuccess] = useState('')

  const getValidate = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (!!value.match(/^[A-Za-z\s]+$/)) {
      if (name === 'name') {
        setName(value);
        IsSetName(true);
      }
    } else {
      if (name === 'name') {
        setName(value);
        IsSetName(false);
      }
    }
    if (name === 'email') {
      if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        setEmail(value);
        isSetEmail(true);
      } else {
        setEmail(value);
        isSetEmail(false);
      }
    }
    if (name === 'pass') {
      if (value.length >= 8 && /\d/.test(value)){
        setPassword(value);
        isSetpass(true);
      } else {
        setPassword(value);
        isSetpass(false);
      }
    }
    if (name === 'cp') {
      setConfirmPassword(value);
      if (value === pass) {
        isSetConfirmPassword(true);
      } else {
        isSetConfirmPassword(false);
      }
    }
  }

  const handleSubmit = () => {
    if (!name || !email || !pass || !cp) {
      seterror('Enter Valid Data');
    } else {
      if (isname || isemail || ispass || iscp) {
        setsuccess('Registered Successfully!!!!');
      } else {
        alert('fail');
      }
    }
  };

  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container  vh-100  text-center text-lg-start mt-5">
        <div className="row align-items-center py-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: '' }}>
              The best offer <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
            </h1>
            <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form onSubmit={handleSubmit} >
                  <h1 className="text-center" style={{ fontFamily: 'serif' }}>
                    Register
                  </h1>
                  <p className='bg-danger text-center'>{error}</p>
                  <div className='mt-3 mb-3'>
                    <TextField className="w-100" name="name" onChange={(e) => getValidate(e)} id="outlined-basic" placeholder='Enter Name' label="" variant="outlined" autoComplete='off' />
                    {!isname &&
                      <div><p className='text-danger'>Invalid Name</p></div>
                    }
                  </div>
                  <div className='mb-3'>
                    <TextField className="w-100" name="email" onChange={(e) => getValidate(e)} id="outlined-basic" placeholder='Enter Email' label="" variant="outlined" autoComplete='off' />
                    {!isemail &&
                      <div><p className='text-danger'>Invalid Email</p></div>
                    }
                  </div>
                  <div className='mb-3'>
                    <TextField className="w-100" name="pass" onChange={(e) => getValidate(e)} id="outlined-basic" placeholder='Enter Password' type='password' label="" variant="outlined" autoComplete='off' />
                    {!ispass &&
                      <div><p className='text-danger'>Password must contain at least 8 letters</p></div>
                    }
                  </div>
                  <div className='mb-3'>
                    <TextField className="w-100" name='cp' onChange={(e) => getValidate(e)} id="outlined-basic" placeholder='Re-Type Password' type='password' label="" variant="outlined" autoComplete='off' />
                    {!iscp &&
                      <div><p className='text-danger'>Password does not match</p></div>
                    }
                  </div>
                  <div className="text-center">
                    <Button type="submit" className="bg-success w-50" variant="contained">
                      Sign Up
                    </Button>
                    <p className='text-success text-center'>{success}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
}

export default App;
