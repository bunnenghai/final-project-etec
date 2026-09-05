import React, { useEffect, useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import { useCart } from './CartContext';
import View from './View';

function Drink() {
    const [drink, setDrink] = useState([]);
    const [product, setProduct] = useState()
    const { addToCart } = useCart();

    useEffect(() => {
        fetch("/Drink.json")
            .then((res) => res.json())
            .then((data) => setDrink(data))
    }, [])

    return (
        <div id='drink' className='container-fluid h-auto text-center scroll-mt-20'>
            <span className='badge bg-warning text-dark px-3 py-2 my-3 rounded-pill'>
                BITE<span className='text-danger'>NOW</span> DRINK
            </span>
            <div className='row m-auto' style={{ width: '70%' }}>
                {drink.map((item) => (
                    <div key={item.id} className='col-12 col-md-6 col-lg-3'>
                        <div className='card mb-4 relative'>

                            {/* image */}
                            <div className='card-body p-0'>
                                <img className='w-100' style={{ height: '270px', objectFit: 'cover' }} src={item.image} alt="" />
                            </div>

                            {/* // detail */}
                            <div className='card-footer py-3 bg-danger text-white rounded-bottom'>
                                <h6 className='m-0 p-1'>{item.name}</h6>
                                <p className='m-0 p-0.5 opacity-50 line-clamp-2'>{item.description}</p>
                                <p className='m-0 p-1 text-warning font-bold'>$ {item.price}</p>
                                <div className='w-full flex justify-content-between gap-2 mt-2'>
                                    <button onClick={() => setProduct(item)} data-bs-toggle='modal' data-bs-target='#productModal' className='bg-warning rounded px-2 py-2 text-black font-semibold border-0 grow' > View Details </button>
                                    <button onClick={() => addToCart(item)} className='bg-warning rounded px-3 py-2 text-black font-semibold border-0' title='Add to Cart' > <FaCartShopping /> </button>
                                </div>
                            </div>

                            {/* discount */}
                            <span className='bg-danger text-warning rounded absolute top-2 right-2 w-fit h-fit px-1'>-{item.discount}%</span>
                        </div>
                    </div>
                ))}
            </div>
            <View product={product} />
        </div>
    )
}

export default Drink
