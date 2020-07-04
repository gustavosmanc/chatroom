class ChatUI {
  constructor(list) {
    this.list = list;
  }

  clear() {
    this.list.innerHTML = "";
  }

  updateSelectedRoom(e) {
    const roomSelected = document.querySelectorAll(".room-selected");
    roomSelected.forEach((e) => {
      e.classList.remove("room-selected");
    });

    e.target.classList.add("room-selected");
  }

  render(data) {
    const when = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
      addSufix: true,
    });
    const html = `
    <li class="list-group-item">
      <span class="username">${data.username}</span>
      <span class="message">${data.message}</span>
      <div class="time">${data.created_at.toDate()}</div>
    </li>
    `;

    this.list.innerHTML += html;
  }
}
