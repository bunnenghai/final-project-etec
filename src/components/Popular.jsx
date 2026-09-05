import React from 'react'

function Popular() {
    return (
        <div id='popular' className='scroll-mt-20 m-auto py-3 mb-5' style={{ width: '68%' }}>
            <div className='w-full flex justify-content-center items-center mb-3'>
                <span className='badge bg-warning text-dark px-3 py-2 rounded-pill w-auto m-auto'>
                    <span className='text-danger'>POPULAR</span>  FOOD & DRINK
                </span>
            </div>
            {/* 1st */}
            <div className='row align-items-center g-4 mb-5'>
                {/* left */}
                <div className='col-12 col-lg-6'>
                    <div className='w-full pe-lg-5'>
                        <span className='badge bg-warning text-dark rounded-pill px-3 py-2 mb-3'>
                            ⭐ Customer Favorite
                        </span>
                        <h2 style={{ fontWeight: "bolder" }} className='mb-3'>
                            Salmon Poke
                        </h2>
                        <p className='text-secondary fs-5'>
                            Fresh and tender salmon poke combined with rice, vegetables, avocado, and a savory sauce.
                        </p>
                        <div className='d-flex align-items-center gap-2 mb-4'>
                            <span className='text-warning fs-5'>
                                ★★★★★
                            </span>
                            <span className='text-secondary'>
                                4.9 (120+ reviews)
                            </span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h3 style={{ fontWeight: "bolder" }} className='mb-0'>
                                $1.99
                            </h3>
                            <button className='btn btn-warning rounded-pill px-4 py-2 fw-bold'>
                                Add to Cart →
                            </button>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className='col-12 col-lg-6'>
                    <div className='w-full flex justify-content-end relative'>
                        <span className='absolute top-0 right-0 bg-danger text-warning px-2 py-1 rounded-lg'>
                            -18%
                        </span>
                        <img style={{ width: '90%', height: '350px', objectFit: 'cover' }} className='rounded-4 shadow-lg' src="https://i.pinimg.com/1200x/f5/63/ce/f563ced4e6959c2759ae6c1c15a5b7d8.jpg" alt="Salmon Poke" />
                    </div>
                </div>
            </div>

            {/* 2nd */}
            <div className='row align-items-center g-4'>
                {/* left */}
                <div className='col-12 col-lg-6'>
                    <div className='w-full flex justify-content-start relative'>
                        <span className='absolute top-0 left-0 bg-danger text-warning px-2 py-1 rounded-lg'>
                            -18%
                        </span>
                        <img style={{ width: '90%', height: '350px', objectFit: 'cover' }} className='rounded-4 shadow-lg' src="https://i.pinimg.com/1200x/f5/63/ce/f563ced4e6959c2759ae6c1c15a5b7d8.jpg" alt="Salmon Poke" />
                    </div>
                </div>

                {/* right */}
                <div className='col-12 col-lg-6'>
                    <div className='w-full pe-lg-5'>
                        <span className='badge bg-warning text-dark rounded-pill px-3 py-2 mb-3'>
                            ⭐ Customer Favorite
                        </span>
                        <h2 style={{ fontWeight: "bolder" }} className='mb-3'>
                            Salmon Poke
                        </h2>
                        <p className='text-secondary fs-5'>
                            Fresh and tender salmon poke combined with rice, vegetables, avocado, and a savory sauce.
                        </p>
                        <div className='d-flex align-items-center gap-2 mb-4'>
                            <span className='text-warning fs-5'>
                                ★★★★★
                            </span>
                            <span className='text-secondary'>
                                4.9 (120+ reviews)
                            </span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h3 style={{ fontWeight: "bolder" }} className='mb-0'>
                                $1.99
                            </h3>
                            <button className='btn btn-warning rounded-pill px-4 py-2 fw-bold'>
                                Add to Cart →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular
