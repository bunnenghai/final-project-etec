import React from 'react'
import { FaPhone, FaEnvelope, FaLocationDot, FaClock, FaPaperPlane } from 'react-icons/fa6'

function Contact() {

    return (

        <div id='contact' className='bg-light scroll-mt-20 py-3'>

            <div className='container'>

                <div className='text-center mb-5'>

                    <span className='badge bg-warning text-dark px-3 py-2 rounded-pill'>
                        CONTACT US
                    </span>

                    <h1 className='fw-bold mt-3 mb-3'>
                        Get In <span className='text-danger'>Touch</span>
                    </h1>

                    <p className='text-secondary mx-auto' style={{ maxWidth: '650px' }}>
                        Have a question, suggestion, or need help with your order?
                        Send us a message and our team will be happy to help.
                    </p>

                </div>

                <div className='row g-4'>

                    <div className='col-lg-5'>

                        <div className='bg-danger text-white rounded-4 shadow-lg p-4 p-lg-5 h-100'>

                            <h2 className='fw-bold mb-3'>
                                Let's Talk!
                            </h2>

                            <p className='mb-4 opacity-75'>
                                We would love to hear from you. Contact BiteNow
                                anytime and we'll get back to you as soon as possible.
                            </p>

                            <div className='d-flex align-items-center gap-3 mb-4'>

                                <div className='bg-warning text-dark rounded-circle d-flex justify-content-center align-items-center' style={{ width: '48px', height: '48px' }}>

                                    <FaPhone />

                                </div>

                                <div>

                                    <small className='opacity-75'>
                                        Phone
                                    </small>

                                    <h6 className='fw-bold mb-0'>
                                        +855 12 345 678
                                    </h6>

                                </div>

                            </div>

                            <div className='d-flex align-items-center gap-3 mb-4'>

                                <div className='bg-warning text-dark rounded-circle d-flex justify-content-center align-items-center' style={{ width: '48px', height: '48px' }}>

                                    <FaEnvelope />

                                </div>

                                <div>

                                    <small className='opacity-75'>
                                        Email
                                    </small>

                                    <h6 className='fw-bold mb-0'>
                                        support@bitenow.com
                                    </h6>

                                </div>

                            </div>

                            <div className='d-flex align-items-center gap-3 mb-4'>

                                <div className='bg-warning text-dark rounded-circle d-flex justify-content-center align-items-center' style={{ width: '48px', height: '48px' }}>

                                    <FaLocationDot />

                                </div>

                                <div>

                                    <small className='opacity-75'>
                                        Location
                                    </small>

                                    <h6 className='fw-bold mb-0'>
                                        Phnom Penh, Cambodia
                                    </h6>

                                </div>

                            </div>

                            <div className='d-flex align-items-center gap-3'>

                                <div className='bg-warning text-dark rounded-circle d-flex justify-content-center align-items-center' style={{ width: '48px', height: '48px' }}>

                                    <FaClock />

                                </div>

                                <div>

                                    <small className='opacity-75'>
                                        Opening Hours
                                    </small>

                                    <h6 className='fw-bold mb-0'>
                                        Mon - Sun : 8AM - 10PM
                                    </h6>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='col-lg-7'>

                        <div className='bg-white rounded-4 shadow-lg p-4 p-lg-5 h-100'>

                            <h3 className='fw-bold mb-4'>
                                Send Us A <span className='text-danger'>Message</span>
                            </h3>

                            <div className='row g-3'>

                                <div className='col-md-6'>

                                    <label className='form-label fw-semibold'>
                                        Your Name
                                    </label>

                                    <input
                                        type='text'
                                        className='form-control form-control-lg rounded-3'
                                        placeholder='Enter your name'
                                    />

                                </div>

                                <div className='col-md-6'>

                                    <label className='form-label fw-semibold'>
                                        Email Address
                                    </label>

                                    <input
                                        type='email'
                                        className='form-control form-control-lg rounded-3'
                                        placeholder='Enter your email'
                                    />

                                </div>

                                <div className='col-12'>

                                    <label className='form-label fw-semibold'>
                                        Subject
                                    </label>

                                    <input
                                        type='text'
                                        className='form-control form-control-lg rounded-3'
                                        placeholder='What is this about?'
                                    />

                                </div>

                                <div className='col-12'>

                                    <label className='form-label fw-semibold'>
                                        Message
                                    </label>

                                    <textarea
                                        className='form-control rounded-3'
                                        rows='5'
                                        placeholder='Write your message here...'
                                    ></textarea>

                                </div>

                                <div className='col-12 mt-3'>

                                    <button
                                        type='button'
                                        className='btn btn-danger w-100 rounded-pill py-3 fw-bold shadow'
                                    >
                                        Send Message

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='bg-warning text-dark rounded-4 shadow-sm p-4 mt-4 text-center'>

                    <h5 className='fw-bold mb-2'>
                        Hungry? We're Ready To Help!
                    </h5>

                    <p className='mb-0'>
                        Your satisfaction is our priority. Thank you for choosing BiteNow.
                    </p>

                </div>

            </div>

        </div>
    )
}

export default Contact
