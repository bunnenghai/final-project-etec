import React, { useState } from 'react'
import { FaStar, FaHeart, FaRegHeart, FaMinus, FaPlus, FaXmark } from 'react-icons/fa6'
import { useCart } from './CartContext'

function View({ product }) {

    const [quantity, setQuantity] = useState(1)
    const [favorited, setFavorited] = useState(false)
    const { addToCart } = useCart()

    if (!product) {
        return null
    }

    const isDrink = product.id >= 101
    const category = isDrink ? 'Drink' : 'Food'

    const addProduct = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product)
        }
        setQuantity(1)
    }

    const totalPrice = product.price * quantity
    return (
        <div className='modal fade' id='productModal' tabIndex='-1' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className='modal-content border-0 rounded-4 overflow-hidden shadow-lg'>
                    <div className='row g-0'>
                        <div className='col-md-6 position-relative bg-dark'>
                            <img src={product.image} alt={product.name} className='w-100 h-100 object-fit-cover' style={{ minHeight: '500px' }} />
                            <div className='position-absolute top-0 inset-s-0 w-100 h-100' style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.6), transparent 45%, rgba(0,0,0,0.8))' }}></div>
                            <div className='position-absolute top-0 inset-s-0 p-4'>
                                <span className={`badge rounded-pill px-3 py-2 fs-6 ${isDrink ? 'bg-warning text-dark' : 'bg-danger'}`}>
                                    {category}
                                </span>
                            </div>

                            <div className='position-absolute top-0 inset-e-0 p-4 d-flex gap-2'>
                                <button type='button' className='btn btn-light rounded-circle shadow-sm' style={{ width: '42px', height: '42px' }} onClick={() => setFavorited(!favorited)} aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}>
                                    {favorited ? <FaHeart className='text-danger' /> : <FaRegHeart className='text-danger' />}
                                </button>

                                <button type='button' data-bs-dismiss='modal' className='btn btn-light rounded-circle shadow-sm' style={{ width: '42px', height: '42px' }} aria-label='Close'>
                                    <FaXmark />
                                </button>
                            </div>

                            <div className='position-absolute bottom-0 inset-s-0 p-4 text-white'>
                                <h2 className='fw-bold mb-0'>
                                    {product.name}
                                </h2>
                            </div>
                        </div>

                        <div className='col-md-6 bg-white'>
                            <div className='p-4 p-lg-5 h-100 d-flex flex-column'>
                                <div className='d-flex justify-content-between align-items-start mb-3'>
                                    <div>
                                        <span className='text-danger fw-bold text-uppercase small'>
                                            {category} 
                                        </span>
                                        <h2 className='fw-bold mt-1 mb-0'>
                                            {product.name}
                                        </h2>
                                    </div>
                                    <div className='text-end'>
                                        <div className='text-danger fw-bold fs-2'>
                                            ${product.price}
                                        </div>
                                        {product.discount && (
                                            <span className='badge bg-warning text-dark'>
                                                -{product.discount}% OFF
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-2 mb-4'>
                                    <div className='text-warning'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span className='fw-semibold'>
                                        4.9
                                    </span>
                                    <span className='text-muted'>
                                        (128 orders)
                                    </span>
                                </div>
                                <div className='bg-light rounded-4 p-3 mb-4 border-start border-danger border-4'>
                                    <p className='mb-0 text-secondary'>
                                        {product.description}
                                    </p>
                                </div>

                                <div className='border-top border-bottom py-3 mb-4'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <span className='fw-bold'>
                                                Quantity
                                            </span>
                                            <div className='text-muted small'>
                                                Choose how many you want
                                            </div>
                                        </div>

                                        <div className='d-flex align-items-center border border-danger rounded-pill overflow-hidden shadow-sm'>
                                            <button type='button' className='btn btn-light rounded-0 px-3 py-2' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} aria-label='Decrease quantity'>
                                                <FaMinus size={11} />
                                            </button>
                                            <span className='fw-bold px-3 text-danger' style={{ minWidth: '45px', textAlign: 'center' }}>
                                                {quantity}
                                            </span>
                                        <button type='button' className='btn btn-light rounded-0 px-3 py-2' onClick={() => setQuantity(quantity + 1)} aria-label='Increase quantity'>
                                                <FaPlus size={11} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-auto'>
                                    <div className='d-flex justify-content-between align-items-center mb-3'>
                                        <span className='text-muted'>
                                            Total price
                                        </span>
                                        <span className='text-danger fw-bold fs-3'>
                                            ${totalPrice.toFixed(2)}
                                        </span>
                                    </div>

                                    <button onClick={addProduct} data-bs-dismiss='modal' className='btn btn-danger w-100 rounded-pill py-3 fw-bold shadow'>
                                        Add {quantity} to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View