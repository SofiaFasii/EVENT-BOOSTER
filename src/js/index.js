import { fetchEvents } from "./api";
import { renderEvents } from "./render";

let country = "US"
let keyword = "events"
let page = 1

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
