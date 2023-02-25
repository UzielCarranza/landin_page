import {useState} from "react";
import '../styles/contactForm.css';

export const Contact = () => {
    const [formStatus, setFormStatus] = useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const {name, email, message} = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div className="form-container wrapper">
            <h2 className="title">Contact Us</h2>
            <form className="form" onSubmit={onSubmit}>
                {formInput("text", "name", "name")}
                {formInput("email", "email", "email")}
                {formInput("message", "message", "type your message...")}
                <div className="input-wrapper">
                    <button type="submit" className="form-btn">
                        {formStatus}
                    </button>
                </div>
            </form>

        </div>
    )
}

const formInput = (type, id, placeholder) => {
    return (
        <div className="input-wrapper">
            {
                type === "message" ?

                    <input id={id} type={type} className="message" placeholder={placeholder} required/>
                    :
                    <input id={id} type={type} className="form-control" placeholder={placeholder} required/>
            }
        </div>
    )
}