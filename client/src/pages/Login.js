import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const LogIn = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);
  
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      const { data } = await login({
        variables: { ...formState }
      });
  
      console.log(data);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className='flex justify-center '>
        
      <div className='flex flex-wrap '>

        <div className='flex'>
          <h4 className='flex'>Login</h4>
          <div className='flex'>
            <form onSubmit={handleFormSubmit} >
              <input
                className='flex m-5 focus:ring-indigo-500 flex m-5 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-slate-900'
                placeholder='Email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='flex m-5 focus:ring-indigo-500 flex m-5 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-slate-900'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='flex' type='submit'>
                Submit
              </button>
            </form>
            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogIn;
