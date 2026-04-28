const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json"
const API_KEY = "tG7aQ3GCK35UI1b0FVQGBmQ2kSZJ2t4e"

let country = "US"
let keyword = "events"
let page = 1

export async function fetchEvents({country, keyword, page}) {
  const URL = `${BASE_URL}?apikey=${API_KEY}&keyword=${keyword}&countryCode=${country}&page=${page}`

  const res = await fetch(URL);
  const data = await res.json();

  return data;
}

async function init() {
  const data = await fetchEvents({country, keyword, page});

  if(!data._embedded){
    console.log("Немає події")
    return
  }

  const events = data._embedded.events;
  console.log(events); 
}
init();
