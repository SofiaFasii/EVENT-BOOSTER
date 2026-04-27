const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json"
const API_KEY = "tG7aQ3GCK35UI1b0FVQGBmQ2kSZJ2t4e"

let keyword = 'devjam'
let countryCode = 'UA'
let page = 1
const url = `${BASE_URL}?apikey=${API_KEY}&keyword=${keyword}&countryCode=${countryCode}&page=${page}`


fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
