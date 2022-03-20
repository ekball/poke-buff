import React, { useState } from 'react';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className=''>
      <div className=''>
        <div className=''>
          <h4 className=''>Login</h4>
          <div className=''>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='submit-button' type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
