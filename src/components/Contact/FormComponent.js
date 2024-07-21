
import React from 'react';

const FormComponent = React.forwardRef((props, ref) => {
    return (
        // <div className="container">
            <form ref={ref} name='submit-to-google-sheet' onSubmit={props.onSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="Name" placeholder="Enter your name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="Email" placeholder="Enter your email" required />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="Subject" placeholder="Enter the subject" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="Message" cols={30} placeholder="Enter the message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        // </div>
    );
});

export default FormComponent;
