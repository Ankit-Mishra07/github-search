import Cookies from 'js-cookie'


export const handleSetCookie = (name, value) => {
    Cookies.set(name, value)
    
}

export const handleGetCookie = (name) => {
    let getC = Cookies.get(name);
    return getC
}

