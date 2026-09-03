import React from 'react'
import { FaUtensils, FaTruckFast, FaHeart, FaStar } from 'react-icons/fa6'

function About() {

    return (

        <div id="about" className='bg-light scroll-mt-20'>

            <div className='container'>

                <div className='text-center mb-5'>

                    <span className='badge bg-warning text-dark px-3 py-2 rounded-pill'>
                        ABOUT BITE<span className='text-danger'>NOW</span>
                    </span>

                    <h1 className='fw-bold mt-3 mb-3'>
                        Good Food, <span className='text-danger'>Good Mood</span>
                    </h1>

                    <p className='text-secondary mx-auto' style={{ maxWidth: '650px' }}>
                        At BiteNow, we believe great food should be delicious,
                        fresh, affordable, and delivered right when you want it.
                    </p>

                </div>

                <div className='row align-items-center g-5'>

                    <div className='col-lg-6'>

                        <div className='position-relative'>

                            <div className='bg-danger rounded-4 p-2 shadow-lg'>

                                <img
                                    src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
                                    alt='Delicious food'
                                    className='img-fluid rounded-4 w-100'
                                    style={{ height: '400px', objectFit: 'cover' }}
                                />

                            </div>

                            <div className='position-absolute bottom-0 inset-e-0 bg-warning text-dark p-3 rounded-4 shadow-lg' style={{ transform: 'translate(10px, 20px)' }}>

                                <div className='d-flex align-items-center gap-2'>

                                    <FaStar className='text-danger' />

                                    <div>

                                        <h5 className='fw-bold mb-0'>
                                            4.9 / 5
                                        </h5>

                                        <small>
                                            Customer Rating
                                        </small>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='col-lg-6'>

                        <span className='text-danger fw-bold text-uppercase'>
                            Why Choose Us
                        </span>

                        <h2 className='fw-bold mt-2 mb-3'>
                            We Make Every Bite <span className='text-danger'>Special</span>
                        </h2>

                        <p className='text-secondary'>
                            BiteNow is a food delivery platform created for people
                            who love delicious food without the waiting. From tasty
                            meals to refreshing drinks, we bring your favorite food
                            straight to your door.
                        </p>

                        <p className='text-secondary'>
                            We work with quality ingredients and focus on freshness,
                            flavor, and fast service to make every order a great
                            experience.
                        </p>

                        <div className='row g-3 mt-4'>

                            <div className='col-sm-6'>

                                <div className='bg-white rounded-4 p-3 shadow-sm h-100 border-start border-danger border-4'>

                                    <div className='d-flex align-items-center gap-3'>

                                        <div className='bg-danger text-white rounded-circle d-flex justify-content-center align-items-center' style={{ width: '45px', height: '45px' }}>

                                            <FaUtensils />

                                        </div>

                                        <div>

                                            <h6 className='fw-bold mb-1'>
                                                Fresh Food
                                            </h6>

                                            <small className='text-secondary'>
                                                Made with quality ingredients
                                            </small>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className='col-sm-6'>

                                <div className='bg-white rounded-4 p-3 shadow-sm h-100 border-start border-warning border-4'>

                                    <div className='d-flex align-items-center gap-3'>

                                        <div className='bg-warning text-dark rounded-circle d-flex justify-content-center align-items-center' style={{ width: '45px', height: '45px' }}>

                                            <FaTruckFast />

                                        </div>

                                        <div>

                                            <h6 className='fw-bold mb-1'>
                                                Fast Delivery
                                            </h6>

                                            <small className='text-secondary'>
                                                Delivered fresh to your door
                                            </small>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className='col-sm-6'>

                                <div className='bg-white rounded-4 p-3 shadow-sm h-100 border-start border-warning border-4'>

                                    <div className='d-flex align-items-center gap-3'>

                                        <div className='bg-warning text-dark rounded-circle d-flex justify-content-center align-items-center' style={{ width: '45px', height: '45px' }}>

                                            <FaHeart />

                                        </div>

                                        <div>

                                            <h6 className='fw-bold mb-1'>
                                                Made With Love
                                            </h6>

                                            <small className='text-secondary'>
                                                Food prepared with care
                                            </small>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className='col-sm-6'>

                                <div className='bg-white rounded-4 p-3 shadow-sm h-100 border-start border-danger border-4'>

                                    <div className='d-flex align-items-center gap-3'>

                                        <div className='bg-danger text-white rounded-circle d-flex justify-content-center align-items-center' style={{ width: '45px', height: '45px' }}>

                                            <FaStar />

                                        </div>

                                        <div>

                                            <h6 className='fw-bold mb-1'>
                                                Best Quality
                                            </h6>

                                            <small className='text-secondary'>
                                                Quality you can trust
                                            </small>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='bg-danger text-white rounded-4 shadow-lg p-4 p-md-5 mt-5'>

                    <div className='row text-center g-4'>

                        <div className='col-md-4'>

                            <h2 className='fw-bold mb-1'>
                                500+
                            </h2>

                            <span>
                                Happy Customers
                            </span>

                        </div>

                        <div className='col-md-4'>

                            <h2 className='fw-bold mb-1'>
                                100+
                            </h2>

                            <span>
                                Delicious Dishes
                            </span>

                        </div>

                        <div className='col-md-4'>

                            <h2 className='fw-bold mb-1'>
                                4.9
                            </h2>

                            <span>
                                Average Rating
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default About