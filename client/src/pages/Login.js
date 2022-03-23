import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

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
      
        Auth.login(data.login.token);
    } 
    catch (e) {
        console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className='flex justify-center min-h-screen'>
      <div className='flex-col flex-wrap text-center'>
        <h2 className='flex mt-5 justify-center'>Log In</h2>

        <div className='flex'>
          <div className='flex'>
            <form onSubmit={handleFormSubmit} className='flex-col justify-center'>
              <input
                className='flex m-5 focus:ring-indigo-500 flex m-5 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-slate-900'
                placeholder='Email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='flex m-5 focus:ring-indigo-500 flex m-5 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-slate-900'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className="inline-block px-6 py-2.5 bg-gray-800 text-yellow-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" type='submit'>
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
