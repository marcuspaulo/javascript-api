const yargs = require('yargs');
const axios = require('axios').default;

const user = 'marcuspaulo';

if (user) {
    let url = `https://api.github.com/users/${user}/repos`
    axios.get(url, {

    })
        .then((response) => {
            for (let { full_name, url } of response.data) {
                console.log(`full_name: ${full_name} - url ${url}`);
            }
        })
        .catch(err => {
            console.log(err);
        })
}