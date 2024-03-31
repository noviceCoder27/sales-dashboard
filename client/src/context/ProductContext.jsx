import { createContext, useState, useContext, useEffect } from "react";
import { getAllProducts } from './../apis/product';

export const CreateProductContext = createContext("");

export const ProductContextProvider = ({children}) => {
    const [products,setProducts] = useState(null);
    const [graphData,setGraphData] = useState({bar: null,pie: null, line: null});

    useEffect(() => {
        async function getProducts() {
        try {
            const allProducts = await getAllProducts();
            setProducts(allProducts);
            setGraphData({bar: allProducts,pie:allProducts,line:allProducts});
        } catch(err) {
            console.log(err);
        }
        }
        getProducts();
    },[])

    return (
        <CreateProductContext.Provider value = {{products,setProducts,graphData,setGraphData}}>{children}</CreateProductContext.Provider>
    )
}

export const useProductContext = () => {
   return useContext(CreateProductContext);
}