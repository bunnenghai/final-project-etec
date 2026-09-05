import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((preCart) => {
            const existingProduct = preCart.find(
                (item) => item.id == product.id
            );

            if (existingProduct) {
                return preCart.map((item) =>
                    item.id == product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            // If product doesn't exist, add it
            return [
                ...preCart,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    };

    const increment = (id) => {
        setCart((preCart) => preCart.map((item) => item.id == id ? { ...item, quantity: item.quantity + 1 } : item));
    }

    const decrement = (id) => {
        setCart((preCart) => preCart.map(
            (item) => item.id == id 
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ).filter((item) => item.quantity > 0));
    }

    const removeCart = (id) => {
        setCart((preCart) => preCart.filter((item) => item.id !== id))
    }


    const getCartCount = () => {

        return cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

    };

    return <CartContext value={{ cart, setCart, addToCart, increment, decrement, removeCart,getCartCount }}>
        {children}
    </CartContext>
}
export function useCart() {
    return useContext(CartContext);
}
