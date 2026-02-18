(() => {
  const chatTriggers = document.querySelectorAll("[data-live-chat-trigger]");

  const fab = document.createElement("button");
  fab.className = "chat-fab";
  fab.type = "button";
  fab.setAttribute("aria-label", "Open live chat");
  fab.innerHTML = `
    <svg class="chat-fab-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3c-5 0-9 3.4-9 7.7 0 2.5 1.4 4.7 3.7 6.1V21l4.1-2.2c.4.1.8.1 1.2.1 5 0 9-3.4 9-7.7S17 3 12 3z"></path>
    </svg>
  `;
  document.body.appendChild(fab);

  const popup = document.createElement("aside");
  popup.className = "chat-popup";
  popup.setAttribute("aria-live", "polite");
  popup.hidden = true;
  popup.innerHTML = `
    <div class="chat-popup-header">
      <h2 class="chat-popup-title">Live Chat</h2>
      <button class="chat-popup-close" type="button" aria-label="Close chat popup">&times;</button>
    </div>
    <div class="chat-popup-body">
      <p class="chat-message">
        Sorry, none of our agents are available right now. Please send us your issue and email, and we will reply within 24 hours.
      </p>
      <p class="chat-popup-help">
        Email us at <a href="mailto:support@barefootcaribou.com">support@barefootcaribou.com</a>.
      </p>
    </div>
  `;

  document.body.appendChild(popup);

  const closeButton = popup.querySelector(".chat-popup-close");

  const openPopup = () => {
    popup.hidden = false;
    closeButton.focus();
  };

  const closePopup = () => {
    popup.hidden = true;
  };

  fab.addEventListener("click", openPopup);

  chatTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openPopup();
    });
  });

  closeButton.addEventListener("click", closePopup);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !popup.hidden) {
      closePopup();
    }
  });
})();
