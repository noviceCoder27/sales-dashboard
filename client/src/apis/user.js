const auth_url = import.meta.env.VITE_AUTH_BACKEND_URL


export const googleAuth = async(e) => {
    e.preventDefault();
    window.open(`${auth_url}/google`, "_self");
}

export const twitterAuth = async(e) => {
    e.preventDefault();
    window.open(`${auth_url}/twitter`, "_self");
}