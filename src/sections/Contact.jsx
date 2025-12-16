import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import Alert from '../components/Alert'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const handleSubmit = async(e)=> {
        e.preventDefault();
        setIsLoading(true);
        try {
            console.log('Form Submitted:', formData);
            await emailjs.send('service_5y3v3ta', 'template_ww3b9pf', {
                from_name: formData.name,
                to_name: 'Manuka Gallage',
                from_email: formData.email,
                to_email: 'manukakavinda1110@getShadowMaterial.com',
                message: formData.message
            }, 'user_2fXoXJY1gW3l3Ttq0q7zK')
            setIsLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setIsLoading(false);
            console.error('Unexpected error:', error);
            alert('Ahh, something went wrong. Please try again.');
        }
    }
        
    return (
        <section className='relative flex items-center c-space section-spacing'>
            <Alert />
            <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white'>
                <div className='flex flex-col items-start w-full gap-5 mb-10'>
                    <h2 className='text-heading'>Let's Talk</h2>
                    <p className='font-normal text-neutral-400'>
                        Whether you're looking to build a new website, improve your existing
                        platform, or bring a unique proh=ject to life, I'm here to help. Reach out
                        today to discuss your ideas and see how we can collaborate to create
                        something amazing together.
                    </p>
                </div>
                <form className='w-full' onSubmit={handleSubmit}>
                    <div className='mb-5'>
                        <label htmlFor='name' className='field-label'>
                            Full Name
                        </label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            className='field-input field-input-focus'
                            placeholder='Manuka Gallage'
                            autoComplete='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor='name' className='field-label'>
                            Email
                        </label>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            className='field-input field-input-focus'
                            placeholder='manukakavinda1110@gmail.com'
                            autoComplete='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor='message' className='field-label'>
                            Message
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            type='text'
                            rows='4'
                            className='field-input field-input-focus'
                            placeholder='Share your thoughts...'
                            autoComplete='message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='submit' className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial
                    from-lavender to-royal hover-animation'>
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact