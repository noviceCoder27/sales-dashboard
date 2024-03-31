import axios from 'axios'
const product_url = import.meta.env.VITE_PRODUCT_BACKEND_URL

export const getAllProducts  = async() => {
    try {
        const data = await axios.get(product_url);
        return data.data;
    } catch(err) {
        throw Error("Error fetching products");
    }
}

export const getProductDetails  = async(product_id) => {
    try {
        const data = await axios.get(`${product_url}/${product_id}`);
        return data.data;
    } catch(err) {
        throw Error("Error fetching product details");
    }
}

export const deleteProduct  = async(product_id) => {
    console.log('here1')
    try {
        const data = await axios.delete(`${product_url}/${product_id}`);
        return data.data;
    } catch(err) {
        throw Error("Error deleting product");
    }
}

export const updateProduct  = async(product_id,product) => {
    try {
        const data = await axios.patch(`${product_url}/${product_id}`,product);
        return data.data;
    } catch(err) {
        throw Error("Error updating product details");
    }
}
