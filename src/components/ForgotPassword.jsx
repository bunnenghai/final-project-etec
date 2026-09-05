import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const navigate = useNavigate()
    const handleReset = (e) => {
        e.preventDefault()
        navigate('/login')
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
                    <p className='text-dark fs-5'>Don't worry, we can help you!</p>
                    <img
                        className='w-75 rounded-circle bg-white mt-3 shadow'
                        src="/public/image/logo.png"
                        alt="Food"
                    />
                    <p className='mt-4 text-dark'>🍜 Food &nbsp; 🍲 Soup &nbsp; 🥤 Drinks</p>
                </div>

                <div className='w-50 p-5'>
                    <h2 className='fw-bold text-center mb-2'>Forgot Password?</h2>
                    <p className='text-center text-secondary mb-4'>
                        Enter your email and we'll help you reset your password
                    </p>

                    <form action="" onSubmit={handleReset}>
                        <label className='form-label fw-semibold'>Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className='form-control mb-4'
                        />

                        <button type='submit' className='btn btn-danger w-100 fw-bold py-2'>
                            Reset Password
                        </button>

                        <p className='text-center mt-4 mb-0'>
                            Remember your password?
                            <Link to={'/login'} className='text-danger fw-bold text-decoration-none ms-1'>
                                Login
                            </Link>
                        </p>

                        <p className='text-center mt-2 mb-0'>
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

export default ForgotPassword
