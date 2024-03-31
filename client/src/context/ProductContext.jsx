import { createContext, useState, useContext, useEffect } from "react";
import { getAllProducts } from './../apis/product';

export const CreateProductContext = createContext("");

export const ProductContextProvider = ({children}) => {
    const [products,setProducts] = useState(null)

    useEffect(() => {
        async function getProducts() {
        try {
            const allProducts = await getAllProducts();
            setProducts(allProducts);
        } catch(err) {
            console.log(err);
        }
        }
        getProducts();
    },[])
    
    return (
        <CreateProductContext.Provider value = {{products,setProducts}}>{children}</CreateProductContext.Provider>
    )
}

export const useProductContext = () => {
   return useContext(CreateProductContext);
}