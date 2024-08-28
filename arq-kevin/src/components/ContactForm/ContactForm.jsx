import { useContext, useState, useEffect } from 'react';
import './ContactForm.css';

// Components
import Button from '../Button/Button'; 

// CONTEXTS
import { AppContext } from '../../contexts/AppContext'

function ContactForm() {

    const appContext = useContext(AppContext)

    const [formData, setFormData] = useState({
        name: '',
        email: '', 
        message: '',
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [formSubmitLoading, setFormSubmitLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitLoading(true);
        console.log('Form data:', formData);
    
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    access_key: "439485d1-ba22-4192-8bd4-2d80783235ea"
                }),
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                setFormSubmitted(true);
            } else {
                console.error('Failed to submit:', response.statusText);
                alert(`Erro ao enviar! Status: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert(`Erro: ${error.message}`);
        } finally {
            setFormSubmitLoading(false);
        }
    };

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const isValid = formData.name.trim() && 
                        formData.email.trim() &&
                        isValidEmail(formData.email) &&
                        formData.message.trim();

        setIsFormValid(isValid);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className='contact-form d-flex fd-column al-center'>
            <h2>{appContext.languages[appContext.language].contact.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className='d-flex form-group'>
                    <input 
                        className='form-input' 
                        type="text" 
                        id='name' 
                        name='name'
                        placeholder={appContext.languages[appContext.language].contact.pl1}
                        onChange={handleChange}
                        aria-label='Name'
                        aria-required='true'
                    />
                    <input 
                        className='form-input' 
                        type="email" 
                        id='email' 
                        name='email'
                        placeholder={appContext.languages[appContext.language].contact.pl2}
                        onChange={handleChange}
                        aria-label='Email'
                        aria-required='true'
                    />
                </div>
                <div className='d-flex form-group'>
                    <textarea 
                        className='form-input' 
                        name="message" 
                        id="message" 
                        placeholder={appContext.languages[appContext.language].contact.pl3}
                        rows='4'
                        onChange={handleChange}
                        aria-label='Message'
                        aria-required='true'
                    ></textarea>
                </div>
                <div className='d-flex form-group al-center jc-end'>
                    {formSubmitted && <p className='text-primary'>{appContext.languages[appContext.language].contact.successMsg}</p>}
                    <Button type='submit' buttonStyle='secondary' disabled={!isFormValid || formSubmitLoading}>
                    {appContext.languages[appContext.language].general.send}
                    </Button>
                </div>
            </form>
        </div>    
    );
}

export default ContactForm;