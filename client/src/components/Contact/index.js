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
        <section className='contact-section'>

            <h1 className='contact-title'>Contact</h1>

            <form onSubmit={handleSubmit}>
                {/* subsection for name input */}
                <div className='contact-section'>
                    <label htmlFor="name" >Name: </label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>

                {/* subsection for email input */}
                <div className='contact-section'>
                    <label htmlFor="email" >Email: </label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>

                {/* subsection to for message input */}
                <div className='contact-section message-box-title'>
                    <label htmlFor="message" >Message: </label>
                    <textarea name="message" rows="3" defaultValue={message} onBlur={handleChange} />
                </div>

                {/* subsection to print error message */}
                {errorMessage && (
                <div className='contact-errors'>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button className='contact-button' type="submit">Send</button>
            </form>

        </section>
    );
    }

export default Contact;