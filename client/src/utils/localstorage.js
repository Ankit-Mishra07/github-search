export const getLocal = (key) => {
    let dat = localStorage.getItem(key) || ""
    return dat;
}

export const setLocal = (key, data) => {
    localStorage.setItem(key, data)
}