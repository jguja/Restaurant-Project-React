import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../webLayout/Styles/inputSide.css';

const InputSide = () => {
    // Define the validation schema for the form
    const schema = yup.object().shape({
        name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
        email: yup.string().required('Email is required').email('Invalid email format'),
        phone: yup.string().required('Phone number is required').matches(/^\+?\d{10,14}$/, 'Invalid phone number'),
        message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
    });

    // Use the useForm hook with the yupResolver, which uses our validation schema
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    // Handle form submission logic
    const onSubmit = (data) => {
        console.log(data); // Display form data in the console (you can add logic to send the data to the server)
        reset(); // Reset the form after submission
    };

    return (
        <form className="input-side-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
                <p>Name</p>
                 {/* Use register to register the form field and pass its ref */}
                <input className="input" type="text" placeholder="John Smith" {...register('name')} />
                {/* Display an error message if the field does not meet the requirements */}
                {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>
            <div className="input-wrapper">
                <p>Email</p>
                <input className="input" type="email" placeholder="johnsmith@gmail.com" {...register('email')} />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <div className="input-wrapper">
                <p>Phone</p>
                <input className="input" type="text" placeholder="+48789789789" {...register('phone')} />
                {errors.phone && <p className="error-message">{errors.phone.message}</p>}
            </div>
            <div className="input-wrapper">
                <p>Message</p>
                <textarea className="message-input" placeholder="Write your message" {...register('message')}></textarea>
                {errors.message && <p className="error-message">{errors.message.message}</p>}
            </div>
            <input className="submit-button" type="submit" value="Send Message" />
        </form>
    );
};

export default InputSide;
