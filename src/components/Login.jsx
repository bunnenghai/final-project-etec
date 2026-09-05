import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai";

function Login() {
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        navigate('/')
    }

    return (
        <div className='w-full flex justify-center items-center bg-light' style={{ height: '100vh' }}>
            <div className='w-75 h-auto bg-white flex shadow-lg rounded-4 overflow-hidden relative'>
                <Link to={'/'}>
                    <div className='absolute text-gray-400 hover:text-gray-700 top-3 right-3 fs-5'>
                        <AiOutlineClose />
                    </div>
                </Link>
                <div className='w-50 bg-warning p-5 flex flex-column justify-center items-center text-center'>
                    <h1 className='fw-bold text-danger mb-2'>BiteNow</h1>
                    <p className='text-dark fs-5'>Your favorite food, just a bite away!</p>

                    <img
                        className='w-75 rounded-circle bg-white mt-3 shadow'
                        src="/image/logo.png"
                        alt="Food"
                    />

                    <p className='mt-4 text-dark'> 🍜 Food &nbsp; 🍲 Soup &nbsp; 🥤 Drinks </p>
                </div>

                <div className='w-50 p-5'>
                    <h2 className='fw-bold text-center mb-2'>Welcome Back!</h2>
                    <p className='text-center text-secondary mb-4'>
                        Sign in to continue ordering your favorite food
                    </p>

                    <form action="" onSubmit={handleLogin}>
                        <label className='form-label fw-semibold'>Username</label>
                        <input
                            type="text"
                            name="username"
                            maxLength="15"
                            required
                            placeholder="Enter your username"
                            className='form-control mb-3'
                        />

                        <label className='form-label fw-semibold'>Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Enter your password"
                            className='form-control mb-3'
                        />

                        <div className='flex justify-between items-center mb-4'>
                            <div className='form-check'>
                                <input type="checkbox" className='form-check-input' />
                                <label className='form-check-label'>Remember me</label>
                            </div>

                            <Link to={'/forgot-password'} className='text-danger text-decoration-none'>
                                Forgot password?
                            </Link>
                        </div>

                        <button type='submit' className='btn btn-danger w-100 fw-bold py-2'>
                            Login
                        </button>

                        <p className='text-center mt-4 mb-0'>
                            Don't have an account?
                            <Link to={'/register'} className='text-danger fw-bold text-decoration-none ms-1'>
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
