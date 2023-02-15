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
        <div className="form-container">
            <h2 className="mb-3">React Contact Form Component Example</h2>
            <form onSubmit={onSubmit}>
                <div className="input-wrapper">
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input className="form-control" type="text" id="name" required/>
                </div>
                <div className="input-wrapper">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input className="form-control" type="email" id="email" required/>
                </div>
                <div className="input-wrapper ">
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <textarea className="form-control" id="message" required/>
                </div>
                <button className="form-btn" type="submit">
                    {formStatus}
                </button>
            </form>
        </div>
    )
}