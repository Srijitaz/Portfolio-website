// Contact.js
import React, { useRef } from 'react';
import FormComponent from './FormComponent';

const Contact = () => {
    const formRef = useRef(null);
    const msgRef = useRef(null);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzSZnkfZQ57ZsSGr8Qw7RmYJDaoANCfIcfE5nkHyaHWdBdAuTtGqyLVrFQ0MPtY1bBj/exec';

    const submitForm = (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(formRef.current) })
            .then(response => {
                msgRef.current.innerHTML = "Message sent successfully";
                setTimeout(() => {
                    msgRef.current.innerHTML = "";
                }, 5000);
                formRef.current.reset();
            })
            .catch(error => console.error('Error!', error.message));
    };


    return (
        <div>
            <FormComponent ref={formRef} onSubmit={submitForm} />
            <div id="msg" ref={msgRef}></div>
        </div>
    );
};

export default Contact;
