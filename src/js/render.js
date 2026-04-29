const list = document.querySelector(".events-list");

export function renderEvents(events) {
  const markup = events
    .map((event) => {
      return `
            <li class="event" data-id="${event.id}">
                <img src="${event.images[0].url} class="event-img" alt="">
                <h3>${event.name}</h3>
                <p>${event.dates.start.localDate}</p>
            </li>
        `;
    })

  list.innerHTML = markup;
}
