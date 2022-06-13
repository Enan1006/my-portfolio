import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import swal from 'sweetalert';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aa6mwir', 'template_1c7yxks', form.current, 'V3Yiq3qKXOb9C_Cmd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        swal({
            title: "Your message has been sent successfully!",
            text: "Thanks for conntacting us. You'll receive a email shortly",
            icon: "success",
            button: "OK",
        });
        e.target.reset();
    };
    return (
        <div>
            <div className=' py-28 px-5 md:pl-20'>
                <h2 className=' text-transparent text-xl  mb-5 font-semibold md:mb-20 text-outline opacity-20'>Contact</h2>
                <h1 className='text-4xl font-bold text-white mb-4'>Get In Touch</h1>
                <form ref={form} onSubmit={sendEmail}>

                    <br />
                    <label className='text-left text-2xl text-white' htmlFor="name">Name</label>
                    <br />
                    <input className=' pl-4 py-2 w-3/4 md:w-1/2 bg-indigo-900 focus:border focus:border-white text-white text-xl rounded-lg' type="text" name="name" id="" placeholder='Your name...' required />
                    <br />
                    <br />
                    <label className='text-left text-2xl text-white pt-5' htmlFor="name">Email</label>
                    <br />
                    <input className=' pl-4 py-2 w-3/4 md:w-1/2 bg-indigo-900 focus:border focus:border-white text-white text-xl rounded-lg' type="email" name="email" id="" placeholder='Your email...' required />
                    <br />
                    <br />
                    <label className='text-left text-2xl text-white' htmlFor="name">Message</label>
                    <br />
                    <textarea className=' pl-4 py-2 w-3/4 md:w-1/2 bg-indigo-900 focus:border focus:border-white text-white text-xl rounded-lg' type="email" name="message" id="" placeholder='Your message...' required />
                    <br />
                    <br />
                    <input className=' py-2 w-3/4 md:w-1/2 bg-indigo-900 cursor-pointer rounded-lg text-white font-bold hover:bg-transparent hover:shadow-lg hover:shadow-slate-800' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;