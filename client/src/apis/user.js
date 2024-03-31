const auth_url = import.meta.env.VITE_AUTH_BACKEND_URL
import axios from 'axios'

export const googleAuth = async(e) => {
    e.preventDefault();
    window.open(`${auth_url}/google`, "_self");
}

export const twitterAuth = async(e) => {
    e.preventDefault();
    window.open(`${auth_url}/twitter`, "_self");
}

export const logoutUser = async() => {
    try {
        await axios.get(`${auth_url}/logout`);
    } catch(err) {
        throw Error(err);
    }
}