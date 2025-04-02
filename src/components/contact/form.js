/* eslint-disable */
import React from 'react'
import {animated, useSpring} from "react-spring"
import emailjs from 'emailjs-com'
// import {store} from 'react-notifications-component'
import 'animate.css'

const Form = () => {

    const handleSubmit = e => {
        e.preventDefault()
        emailjs.sendForm('gmail', 'template_AyQbDnJ0', e.target, 'user_Fe7KH41F4a2yVkPJNmOjQ')
        document.getElementById('contact-form').reset()
            // .then(() => {
            //     store.addNotification({
            //         title: "Success!",
            //         message: "Message sent",
            //         type: "success",
            //         insert: "top",
            //         container: "top-right",
            //         animationIn: ["animated", "fadeIn"],
            //         animationOut: ["animated", "fadeOut"],
            //         dismiss: {
            //             duration: 2000,
            //             onScreen: true
            //         }
            //     })
            //     document.getElementById('contact-form').reset()
            // }, error => {
            //     console.log(error.text)
            // })
    }

    const fade2 = useSpring({
        from: {opacity: 0}, opacity: 1, delay: 500,
        config: {duration: 500}
    })

    return <div className="contact-container">

        <animated.form id="contact-form" style={fade2} className="inputs" onSubmit={handleSubmit}>
            <input type="hidden" name="contact_number"/>
            <label className="input">
                <input type="text" name="from_name" placeholder="" className="inp"/>
                <span className="label">Name *</span>
                <span className="border"/>
            </label>
            <label className="input">
                <input type="text" name="from_email" placeholder="" className="inp"/>
                <span className="label">Email *</span>
                <span className="border"/>
            </label>
            <label className="input">
                <textarea name="message" placeholder="" className="inp ta"/>
                <span className="label">Message</span>
                <span className="border"/>
            </label>
            <input type="submit" value="Send" className="submit"/>
        </animated.form>

    </div>
}

export default Form
