import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';


const Result = () => {
    return (
        <p>Your message has been succesfully sent. I will contact with you soon.</p>
    )
}
export default function Contact() {
    const [formData, setFormData] = useState(false)

    // function handleChange(event) {
    //     setFormData(prevFormData => {
    //         const { name, value, type, checked } = event.target
    //         return {
    //             ...prevFormData,
    //             [name]: type === "checkbx" ? checked : value
    //         }
    //     })
    // }



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qd6gvnf', 'template_hp3lh8m', form.current, '8tGEzjel_yeU8x4gv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setFormData(true)
    };
    setTimeout(() => {
        setFormData(false)
    }, 5000)

    return (

        <form ref={form} onSubmit={sendEmail}>
            <h3 className='text-3xl py-1 font-semibold dark:text-gray-100'>Get In Touch</h3>
            <div className='border-2 border-gray-800 sm:w-96 p-6 rounded-md dark:border-gray-300'>
                <div className=" flex flex-col">
                    <label className="font-medium py-3 leading-8 text-gray-800 dark:text-gray-300" htmlFor="">Name</label>
                    <input
                        type="text"
                        className="rounded-sm p-1 border"
                        placeholder="type your name here..."

                        name="name"
                        value={formData.name} />
                </div>
                <div className=" flex flex-col">
                    <label className="font-medium py-3 leading-8 text-gray-800 dark:text-gray-300" htmlFor="">Email</label>
                    <input type="email"
                        className="rounded-sm p-1 border"
                        placeholder="enter your email here..."

                        name="email"
                        value={formData.email} />
                </div>
                <div className=" flex flex-col">
                    <label className="font-medium py-3 leading-8 text-gray-800 dark:text-gray-300" htmlFor="">Message</label>
                    <textarea type="text"
                        className="rounded-sm p-1 border"
                        placeholder="message goes here..."

                        name="message"
                        value={formData.message} />
                </div>
                <button className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white mt-4 px-4 py-2 border-none rounded-md'>Send Message</button>
                <div className="row">{
                    formData ? <Result /> : null
                }

                </div>

            </div>

        </form>

    )
}