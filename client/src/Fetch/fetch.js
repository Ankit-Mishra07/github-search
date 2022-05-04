
export const searchUsername = (username) => {
        let itm;
        fetch(`https://api.github.com/search/users?q=${username}&page=1&per_page=2`)
         .then(res => res.json())
         .then(res => {
             itm = res.itmes
         })
         return itm ? itm : []
        
}