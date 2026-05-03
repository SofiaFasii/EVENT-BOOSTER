import { fetchEvents } from "./api";
import { renderEvents } from "./render";
import { countries } from "./countries";

let country = ""
let keyword = ""
let page = 0

const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const countryInput = document.getElementById('countryInput')


async function init() {
  const data = await fetchEvents({country, keyword, page});

  if(!data._embedded){
    console.log("Немає події")
    return
  }

  const events = data._embedded.events;
  console.log(events); 

  renderEvents(events)
}
init();
