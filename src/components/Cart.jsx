import React from 'react'
import { FaMinus, FaPlus, FaTrash, FaBagShopping } from 'react-icons/fa6'
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

function Cart() {

    const { cart, increment, decrement, removeCart } = useCart();

    const subtotal = cart.reduce((total, item) => total + (item.price) * (item.quantity), 0)
    const deliveryFee = 2.99
    const delivery = subtotal > 25 ? deliveryFee * 0.9 : deliveryFee * 0.65
    const total = subtotal + delivery

    return (
        <div>
            <div className='min-h-screen bg-gray-50 py-5'>
                <Link to={'/'} className='text-warning bg-danger font-semibold px-2 py-1 rounded-pill text-decoration-none fixed right-5 bottom-5'>
                    ← Back to Home
                </Link>
                <h1 className='text-3xl font-bold ps-3 text-center mb-5'>
                    Shopping Cart
                </h1>

                {cart.length === 0 ? (
                    <div className='flex flex-col justify-center items-center py-20'>
                        <FaBagShopping className='text-6xl text-gray-300 mb-4' />
                        <p className='text-2xl font-bold text-gray-500'>
                            Your cart is empty
                        </p>
                        <p className='text-gray-400 mt-2'>
                            Add some delicious food to your cart!
                        </p>
                    </div>
                ) : (

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-5 px-10'>

                        {/* Left */}
                        <div className='lg:col-span-2 flex flex-col gap-4'>
                            {cart.map((item) => (
                                <div className='bg-white border border-blue-200 shadow-lg rounded-xl px-5 py-3 flex gap-x-5 hover:shadow-xl transition' key={item.id}>
                                    <div className='w-30 h-full flex justify-justify-content-center align-items-center rounded-lg'>
                                        <img
                                            className='w-28 h-auto object-contain'
                                            src={item.image}
                                            alt=""
                                        />
                                    </div>

                                    <div className='flex justify-between w-full mx-5'>
                                        <div className='h-full flex items-center'>
                                            <div>
                                                <p className='text-2xl font-bold'>
                                                    {item.name}
                                                </p>

                                                <p className='text-gray-400 text-sm py-1'>
                                                    ${item.price.toFixed(2)} each
                                                </p>

                                                <p className='text-blue-600 font-bold py-1'>
                                                    $ {(item.price * item.quantity).toFixed(2)}
                                                </p>

                                                <div className='flex items-center gap-3 mt-2'>
                                                    <button
                                                        onClick={() => decrement(item.id)}
                                                        className='border rounded-xs w-7 h-7 flex justify-center items-center text-red-600 hover:bg-red-600 hover:text-white transition'>
                                                        <FaMinus />
                                                    </button>

                                                    <div className='w-7 h-7 flex justify-center items-center font-bold'>
                                                        {item.quantity}
                                                    </div>

                                                    <button
                                                        onClick={() => increment(item.id)}
                                                        className='border rounded-xs w-7 h-7 flex justify-center items-center text-green-600 hover:bg-green-600 hover:text-white transition'
                                                    >
                                                        <FaPlus />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => removeCart(item.id)}
                                            className='text-red-500 hover:text-red-800 font-semibold flex items-center gap-1'>
                                            <FaTrash />
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right */}
                        <div className='lg:col-span-1 items-start'>
                            <div className='bg-white border border-blue-200 shadow-lg rounded-xl p-5 sticky top-5'>
                                <p className='text-center text-xl font-bold text-blue-500 mb-4'>
                                    Order Summary
                                </p>

                                <div className='flex justify-between px-4 pt-2 font-semibold'>
                                    <span>Sub Total</span>
                                    <span className='text-blue-500'>
                                        $ {subtotal.toFixed(2)}
                                    </span>
                                </div>

                                <div className='flex justify-between px-4 pt-2 font-semibold'>
                                    <span>Delivery</span>
                                    <span className='text-blue-500'>
                                        $ {delivery.toFixed(2)}
                                    </span>
                                </div>

                                <div className='px-4 pt-4'>
                                    <hr />
                                </div>

                                <div className='flex justify-between px-4 pt-4 font-bold text-lg'>
                                    <span>Total</span>
                                    <span className='text-blue-600'>
                                        $ {total.toFixed(2)}
                                    </span>
                                </div>

                                <div className='flex justify-center mt-5'>
                                    <button
                                        className='bg-green-600 hover:bg-green-700 text-white shadow-lg px-6 py-2 rounded-full font-semibold transition hover:scale-105'
                                    >
                                        Check Out
                                    </button>
                                </div>
                                <p className='text-center text-gray-400 text-sm mt-4'>
                                    🚚 Fast & delicious delivery
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart