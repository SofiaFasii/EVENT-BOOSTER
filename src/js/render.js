const list = document.querySelector(".events-list");

export function renderEvents(events) {
  const markup = events
    .map((event) => {

      return `
        <li class="event" data-id="${event.id}">
          <img src="${event.images[0].url}" alt="${event.name}" class="event-img">
          <h3>${event.name}</h3>
          <p>${event.dates.start.localDate}</p>
          <p>${event._embedded.venues[0].name}</p>
        </li>
      `;
    })
    .join("")

  list.innerHTML = markup;
}
