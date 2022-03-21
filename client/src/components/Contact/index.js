import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    // set the initial state of the form to all blanks
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // set the initial values of the error messages
    const [errorMessage, setErrorMessage] = useState('');

    // set the form to accept name, email, and message fields
    const { name, email, message } = formState;

    // submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // if there is no error message printed out, then change the value of the section
        if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        // when the email box is typed in, check the regex helper to see if it is a valid email
        if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);

            // if its not, make user try again
            if (!isValid) {
                setErrorMessage('This email is invalid; please try a different one.');
            } 
            // otherwise, set the error message as an empty string
            else {
                setErrorMessage('');
            }
        } 
        // otherwise, if there is nothing typed in the field, make user input something & print error message
        else {

            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} needs to be filled out.`);
            } 
            else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section className='contact-section flex flex-wrap justify-center items-start col-1'>

            <div className='gap-5'>
            <h1 className='contact-title flex flex-wrap '>Contact</h1>
            </div>

            <form onSubmit={handleSubmit}>
                {/* subsection for name input */}
                <div className='contact-section m-5'>
                    <label htmlFor="name" >Name: </label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-slate-900'/>
                </div>

                {/* subsection for email input */}
                <div className='contact-section m-5'>
                    <label htmlFor="email" >Email: </label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-slate-900'/>
                </div>

                {/* subsection to for message input */}
                <div className='contact-section message-box-title m-5'>
                    <label htmlFor="message" >Message: </label>
                    <textarea name="message" rows="3" defaultValue={message} onBlur={handleChange} className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-slate-900'/>
                </div>

                {/* subsection to print error message */}
                {errorMessage && (
                <div className='contact-errors'>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button className='m-5 rounded-md hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500' type="submit">Send</button>
            </form>

        </section>
    );
    }

export default Contact;