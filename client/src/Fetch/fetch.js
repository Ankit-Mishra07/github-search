export const searchUsername = async (username) => {
        let res = await fetch(`https://api.github.com/search/users?q=${username}`);
        let dat = await res.json();
        console.log(dat.items)
        return dat.items;
}