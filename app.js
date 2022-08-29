const yargs = require('yargs');
const axios = require('axios').default;

const user = 'marcuspaulo';

if (user) {
    let url = `https://api.github.com/users/${user}/repos`
    axios.get(url, {

    })
        .then((response) => {
            let country = response.data[0];
            console.log('Population:', country.population);
        })
        .catch(err => {
            console.log(err);
        })
}