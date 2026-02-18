(() => {
  const chatTriggers = document.querySelectorAll("[data-live-chat-trigger]");
  if (!chatTriggers.length) return;

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
